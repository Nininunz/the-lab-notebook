#!/usr/bin/env node
/* eslint-disable no-console */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { glob } from 'glob'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
  reset: '\x1b[0m',
  bold: '\x1b[1m',
}

async function getMetaFiles() {
  const pattern = path.join(projectRoot, 'content', '**', '_meta.js')
  return await glob(pattern.replace(/\\/g, '/'))
}

async function getMdxFiles() {
  const pattern = path.join(projectRoot, 'content', '**', '*.mdx')
  return await glob(pattern.replace(/\\/g, '/'))
}

async function loadMetaFile(metaPath) {
  try {
    // Read the file as text and try to extract the object
    const content = fs.readFileSync(metaPath, 'utf8')

    // Try to extract the meta object using regex (multiline approach)
    const metaMatch = content.match(/const meta = \{([\s\S]*?)\n\}/)
    if (metaMatch) {
      // Simple extraction of key-value pairs (both quoted and unquoted)
      let metaContent = metaMatch[0]

      // Remove JavaScript comments (single-line // comments)
      metaContent = metaContent.replace(/\/\/.*$/gm, '')

      // Match quoted keys: 'key': or "key":
      const quotedKeys = [...metaContent.matchAll(/['"]([\w-]+)['"]\s*:/g)].map(
        match => match[1]
      )

      // Match unquoted keys: key: (both with objects and simple values)
      const unquotedKeys = [
        ...metaContent.matchAll(/(\w[\w-]*)\s*:\s*[\{\'\"\w]/gm),
      ].map(match => match[1])

      // Combine both types of keys and filter out common configuration keys
      const configKeys = new Set([
        'title',
        'theme',
        'breadcrumb',
        'type',
        'display',
        'collapsed',
        'sidebar',
        'navbar',
        'footer',
        'toc',
      ])
      const allKeys = [...new Set([...quotedKeys, ...unquotedKeys])].filter(
        key => !configKeys.has(key)
      )

      // Return object with keys
      const result = {}
      allKeys.forEach(key => {
        result[key] = true
      })
      return result
    }

    // Fallback: try dynamic import
    const metaUrl = `file://${metaPath}`
    const metaModule = await import(metaUrl)
    return metaModule.default || {}
  } catch (error) {
    console.warn(
      `${colors.yellow}Warning: Could not load ${metaPath}: ${error.message}${colors.reset}`
    )
    return {}
  }
}

function getFileKey(filePath) {
  const basename = path.basename(filePath, '.mdx')
  return basename === 'index' ? 'index' : basename
}

async function main() {
  console.log(
    `${colors.cyan}${colors.bold}Verifying MDX files are listed in _meta.js files...${colors.reset}\n`
  )

  const metaFiles = await getMetaFiles()
  const mdxFiles = await getMdxFiles()

  console.log(
    `${colors.blue}Found ${metaFiles.length} _meta.js files${colors.reset}`
  )
  console.log(
    `${colors.blue}Found ${mdxFiles.length} .mdx files${colors.reset}\n`
  )

  let totalErrors = 0
  let totalWarnings = 0

  // Group MDX files by their directory
  const mdxByDirectory = {}

  for (const mdxFile of mdxFiles) {
    const dir = path.dirname(mdxFile)
    if (!mdxByDirectory[dir]) {
      mdxByDirectory[dir] = []
    }
    mdxByDirectory[dir].push(mdxFile)
  }

  // Check each directory that has MDX files
  for (const [directory, mdxFilesInDir] of Object.entries(mdxByDirectory)) {
    const metaPath = path.join(directory, '_meta.js')
    const hasMetaFile = fs.existsSync(metaPath)

    console.log(
      `${colors.magenta}Checking directory: ${colors.reset}${path.relative(projectRoot, directory)}`
    )

    if (!hasMetaFile) {
      console.log(`  ${colors.red}ERROR: Missing _meta.js file${colors.reset}`)
      totalErrors++
      continue
    }

    const metaContent = await loadMetaFile(metaPath)
    const metaKeys = Object.keys(metaContent)

    // Check each MDX file in this directory
    for (const mdxFile of mdxFilesInDir) {
      const fileKey = getFileKey(mdxFile)
      const fileName = path.basename(mdxFile)

      if (!metaKeys.includes(fileKey)) {
        console.log(
          `  ${colors.red}ERROR: ${fileName} not listed in _meta.js (missing key: "${fileKey}")${colors.reset}`
        )
        totalErrors++
      } else {
        console.log(`  ${colors.green}✓ ${fileName}${colors.reset}`)
      }
    }

    // Check for meta keys that don't have corresponding MDX files
    for (const metaKey of metaKeys) {
      const expectedFile = metaKey === 'index' ? 'index.mdx' : `${metaKey}.mdx`
      const expectedFilePath = path.join(directory, expectedFile)
      const expectedFolderPath = path.join(directory, metaKey)

      if (!fs.existsSync(expectedFilePath)) {
        // Check if it's a directory instead
        if (
          fs.existsSync(expectedFolderPath) &&
          fs.statSync(expectedFolderPath).isDirectory()
        ) {
          console.log(
            `  ${colors.green}✓ ${metaKey}/ (directory)${colors.reset}`
          )
        } else {
          console.log(
            `  ${colors.yellow}WARNING: _meta.js has key "${metaKey}" but ${expectedFile} doesn't exist (and no ${metaKey}/ directory found)${colors.reset}`
          )
          totalWarnings++
        }
      }
    }

    console.log()
  }

  // Summary
  console.log(`${colors.magenta}Summary:${colors.reset}`)

  if (totalErrors > 0) {
    console.log(
      `${colors.red}${colors.bold}${totalErrors} errors found${colors.reset}`
    )
  }

  if (totalWarnings > 0) {
    console.log(
      `${colors.yellow}${colors.bold}${totalWarnings} warnings found${colors.reset}`
    )
  }

  if (totalErrors === 0 && totalWarnings === 0) {
    console.log(
      `${colors.green}${colors.bold}All MDX files are properly listed in _meta.js files!${colors.reset}`
    )
  }

  console.log(`\n${colors.cyan}Verification complete.${colors.reset}`)

  // Exit with error code if any errors were found
  if (totalErrors > 0) {
    process.exit(1)
  }
}

main()
