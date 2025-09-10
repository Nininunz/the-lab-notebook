#!/usr/bin/env node
/* eslint-disable no-console */

import fs from 'fs'
import { glob } from 'glob'

/**
 * Link verification script for The Lab Notebook
 * Checks internal links in MDX files and components
 */

const CONTENT_DIR = 'content'
const COMPONENTS_DIR = 'components'
const PUBLIC_DIR = 'public'
const TEMPLATES_DIR = 'templates'
const FEATURES_DIR = 'features'
const LIB_DIR = 'lib'
const APP_DIR = 'app'

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m',
}

class LinkVerifier {
  constructor() {
    this.errors = []
    this.warnings = []
    this.checkedFiles = new Set()
    this.existingPages = new Set()
    this.existingAssets = new Set()
  }

  // Scan all content files to build list of existing pages
  async scanExistingPages() {
    const contentFiles = await glob(`${CONTENT_DIR}/**/*.{mdx,md}`, {
      ignore: ['**/node_modules/**'],
    })

    for (const file of contentFiles) {
      // Convert file path to URL path
      let urlPath = file.replace(CONTENT_DIR, '')

      // Handle index files
      if (urlPath.endsWith('/index.mdx') || urlPath.endsWith('/index.md')) {
        urlPath = urlPath.replace('/index.mdx', '').replace('/index.md', '')
      } else {
        // Remove file extension
        urlPath = urlPath.replace(/\.(mdx|md)$/, '')
      }

      // Ensure leading slash
      if (!urlPath.startsWith('/')) {
        urlPath = '/' + urlPath
      }

      // Root index becomes '/'
      if (urlPath === '/index') {
        urlPath = '/'
      }

      this.existingPages.add(urlPath)
    }

    console.log(
      `${colors.blue}Found ${this.existingPages.size} content pages${colors.reset}`
    )
  }

  // Scan public directory for assets
  async scanExistingAssets() {
    try {
      const assetFiles = await glob(`${PUBLIC_DIR}/**/*`, {
        ignore: ['**/node_modules/**'],
      })

      for (const file of assetFiles) {
        // Convert to URL path (remove 'public' prefix)
        const urlPath = file.replace(PUBLIC_DIR, '')
        this.existingAssets.add(urlPath)
      }

      console.log(
        `${colors.blue}Found ${this.existingAssets.size} static assets${colors.reset}`
      )
    } catch {
      console.warn(
        `${colors.yellow}Warning: Could not scan public directory${colors.reset}`
      )
    }
  }

  // Extract links from file content
  // eslint-disable-next-line no-unused-vars
  extractLinks(content, filePath = '') {
    const links = []

    // Remove comments and code blocks to avoid false positives
    const cleanContent = this.removeCommentsAndCodeBlocks(content)

    // First, resolve any DOC_DIR and IMAGE_DIR variables defined in the file
    const docDirMatch = content.match(/export const DOC_DIR = ['"]([^'"]+)['"]/)
    const imageDirMatch = content.match(
      /export const IMAGE_DIR = ['"]([^'"]+)['"]/
    )
    const docDir = docDirMatch ? docDirMatch[1] : null
    const imageDir = imageDirMatch ? imageDirMatch[1] : null

    // MDX/Markdown links: [text](url)
    const markdownLinks = cleanContent.match(/\[([^\]]*)\]\(([^)]+)\)/g) || []
    markdownLinks.forEach(match => {
      let url = match.match(/\]\(([^)]+)\)/)[1]
      url = this.resolveTemplateUrl(url, docDir, imageDir)
      if (this.isInternalLink(url)) {
        links.push({ url, type: 'markdown', match })
      }
    })

    // JSX href attributes: href="/path" or href='/path'
    const hrefLinks = cleanContent.match(/href\s*=\s*["']([^"']+)["']/g) || []
    hrefLinks.forEach(match => {
      let url = match.match(/["']([^"']+)["']/)[1]
      url = this.resolveTemplateUrl(url, docDir, imageDir)
      if (this.isInternalLink(url)) {
        links.push({ url, type: 'jsx', match })
      }
    })

    // JSX shorthand href attributes: href='/path' (without =)
    const shorthandHrefs = cleanContent.match(/\bhref['"]([^'"]+)['"]/g) || []
    shorthandHrefs.forEach(match => {
      let url = match.match(/['"]([^'"]+)['"]/)[1]
      url = this.resolveTemplateUrl(url, docDir, imageDir)
      if (this.isInternalLink(url)) {
        links.push({ url, type: 'jsx_shorthand', match })
      }
    })

    // Image sources: src="/path"
    const imgSrcs = cleanContent.match(/src\s*=\s*["']([^"']+)["']/g) || []
    imgSrcs.forEach(match => {
      let url = match.match(/["']([^"']+)["']/)[1]
      url = this.resolveTemplateUrl(url, docDir, imageDir)
      if (this.isInternalLink(url) && this.isAssetPath(url)) {
        links.push({ url, type: 'image', match })
      }
    })

    // Template literal src attributes: src={`${VAR}/path`}
    const templateSrcs = cleanContent.match(/src\s*=\s*\{`([^`]+)`\}/g) || []
    templateSrcs.forEach(match => {
      let url = match.match(/\{`([^`]+)`\}/)[1]
      url = this.resolveTemplateUrl(url, docDir, imageDir)
      if (this.isInternalLink(url) && this.isAssetPath(url)) {
        links.push({ url, type: 'template_src', match })
      }
    })

    // Template literal largeSrc attributes: largeSrc={`${VAR}/path`}
    const templateLargeSrcs =
      cleanContent.match(/largeSrc\s*=\s*\{`([^`]+)`\}/g) || []
    templateLargeSrcs.forEach(match => {
      let url = match.match(/\{`([^`]+)`\}/)[1]
      url = this.resolveTemplateUrl(url, docDir, imageDir)
      if (this.isInternalLink(url) && this.isAssetPath(url)) {
        links.push({ url, type: 'template_large_src', match })
      }
    })

    // Object property hrefs: href: '/path' or href: "/path"
    const objHrefs = cleanContent.match(/href\s*:\s*["']([^"']+)["']/g) || []
    objHrefs.forEach(match => {
      let url = match.match(/["']([^"']+)["']/)[1]
      url = this.resolveTemplateUrl(url, docDir, imageDir)
      if (this.isInternalLink(url)) {
        links.push({ url, type: 'object_href', match })
      }
    })

    // Object property images: image: '/path' or image: "/path"
    const objImages = cleanContent.match(/image\s*:\s*["']([^"']+)["']/g) || []
    objImages.forEach(match => {
      let url = match.match(/["']([^"']+)["']/)[1]
      url = this.resolveTemplateUrl(url, docDir, imageDir)
      if (this.isInternalLink(url) && this.isAssetPath(url)) {
        links.push({ url, type: 'object_image', match })
      }
    })

    // Object property src: src: '/path' or src: "/path"
    const objSrcs = cleanContent.match(/src\s*:\s*["']([^"']+)["']/g) || []
    objSrcs.forEach(match => {
      let url = match.match(/["']([^"']+)["']/)[1]
      url = this.resolveTemplateUrl(url, docDir, imageDir)
      if (this.isInternalLink(url) && this.isAssetPath(url)) {
        links.push({ url, type: 'object_src', match })
      }
    })

    // Object property largeSrc: largeSrc: '/path' or largeSrc: "/path"
    const objLargeSrcs =
      cleanContent.match(/largeSrc\s*:\s*["']([^"']+)["']/g) || []
    objLargeSrcs.forEach(match => {
      let url = match.match(/["']([^"']+)["']/)[1]
      url = this.resolveTemplateUrl(url, docDir, imageDir)
      if (this.isInternalLink(url) && this.isAssetPath(url)) {
        links.push({ url, type: 'object_large_src', match })
      }
    })

    return links
  }

  // Remove comments and code blocks to avoid checking links in examples
  removeCommentsAndCodeBlocks(content) {
    let cleaned = content

    // Remove HTML comments
    cleaned = cleaned.replace(/<!--[\s\S]*?-->/g, '')

    // Remove JavaScript/JSX comments
    cleaned = cleaned.replace(/\/\*[\s\S]*?\*\//g, '') // Block comments
    cleaned = cleaned.replace(/\/\/.*$/gm, '') // Line comments

    // Remove code blocks (```...```)
    cleaned = cleaned.replace(/```[\s\S]*?```/g, '')

    // Remove inline code (`...`) but preserve JSX template literals like src={`...`}
    // First preserve JSX template literals by replacing them with placeholders
    const jsxTemplates = []
    cleaned = cleaned.replace(/([\w]+\s*=\s*\{`[^`]*`\})/g, (_, template) => {
      const placeholder = `__JSX_TEMPLATE_${jsxTemplates.length}__`
      jsxTemplates.push(template)
      return placeholder
    })

    // Now remove inline code
    cleaned = cleaned.replace(/`[^`]*`/g, '')

    // Restore JSX template literals
    jsxTemplates.forEach((template, index) => {
      const placeholder = `__JSX_TEMPLATE_${index}__`
      cleaned = cleaned.replace(placeholder, template)
    })

    return cleaned
  }

  // Resolve template URLs like ${DOC_DIR}/path or ${IMAGE_DIR}/path
  resolveTemplateUrl(url, docDir, imageDir) {
    if (url.includes('${DOC_DIR}') && docDir) {
      url = url.replace(/\$\{DOC_DIR\}/g, docDir)
    }

    if (url.includes('${IMAGE_DIR}') && imageDir) {
      url = url.replace(/\$\{IMAGE_DIR\}/g, imageDir)
    }

    // Handle template literals with backticks
    if (url.includes('`${DOC_DIR}') && docDir) {
      url = url.replace(/`\${DOC_DIR}([^`]*)`/, docDir + '$1')
    }

    if (url.includes('`${IMAGE_DIR}') && imageDir) {
      url = url.replace(/`\${IMAGE_DIR}([^`]*)`/, imageDir + '$1')
    }

    return url
  }

  // Check if link is internal (starts with / or relative)
  isInternalLink(url) {
    return (
      url.startsWith('/') ||
      (!url.startsWith('http') &&
        !url.startsWith('mailto:') &&
        !url.startsWith('#'))
    )
  }

  // Check if path is likely an asset
  isAssetPath(url) {
    const assetExtensions = [
      '.png',
      '.jpg',
      '.jpeg',
      '.gif',
      '.svg',
      '.webp',
      '.pdf',
      '.ico',
    ]
    return assetExtensions.some(ext => url.toLowerCase().endsWith(ext))
  }

  // Verify a single link
  verifyLink(url, filePath) {
    // Remove query params and fragments for verification
    const cleanUrl = url.split('?')[0].split('#')[0]

    if (this.isAssetPath(cleanUrl)) {
      // Check asset exists
      if (!this.existingAssets.has(cleanUrl)) {
        this.errors.push({
          file: filePath,
          url,
          type: 'missing_asset',
          message: `Asset not found: ${cleanUrl}`,
        })
      }
    } else {
      // Check page exists
      if (!this.existingPages.has(cleanUrl)) {
        this.errors.push({
          file: filePath,
          url,
          type: 'missing_page',
          message: `Page not found: ${cleanUrl}`,
        })
      }
    }
  }

  // Process a single file
  async processFile(filePath) {
    if (this.checkedFiles.has(filePath)) return
    this.checkedFiles.add(filePath)

    try {
      const content = fs.readFileSync(filePath, 'utf-8')
      const links = this.extractLinks(content, filePath)

      links.forEach(({ url }) => {
        this.verifyLink(url, filePath)
      })

      if (links.length > 0) {
        console.log(
          `${colors.blue}Checked ${links.length} links in ${filePath}${colors.reset}`
        )
      }
    } catch (error) {
      this.errors.push({
        file: filePath,
        type: 'read_error',
        message: `Could not read file: ${error.message}`,
      })
    }
  }

  // Main verification function
  async verify() {
    console.log(
      `${colors.bold}🔗 Link Verification Starting...${colors.reset}\n`
    )

    // Build index of existing content
    await this.scanExistingPages()
    await this.scanExistingAssets()

    console.log('')

    // Find all files to check
    const patterns = [
      `${CONTENT_DIR}/**/*.{mdx,md}`,
      `${COMPONENTS_DIR}/**/*.{js,jsx,ts,tsx}`,
      `${TEMPLATES_DIR}/**/*.{mdx,md}`,
      `${FEATURES_DIR}/**/*.{js,jsx,ts,tsx}`,
      `${LIB_DIR}/**/*.{js,jsx,ts,tsx}`,
      `${APP_DIR}/**/*.{js,jsx,ts,tsx}`,
    ]

    const allFiles = []
    for (const pattern of patterns) {
      const files = await glob(pattern, { ignore: ['**/node_modules/**'] })
      allFiles.push(...files)
    }

    console.log(
      `${colors.blue}Scanning ${allFiles.length} files for links...${colors.reset}\n`
    )

    // Process each file
    for (const file of allFiles) {
      await this.processFile(file)
    }

    // Report results
    this.printResults()

    return this.errors.length === 0
  }

  // Print verification results
  printResults() {
    if (this.errors.length > 0) {
      console.log(
        `\n${colors.red}${colors.bold}❌ Errors found:${colors.reset}`
      )
      this.errors.forEach(error => {
        console.log(`  ${colors.red}✗${colors.reset} ${error.file}`)
        console.log(`    ${error.message}`)
        if (error.url) {
          console.log(`    Link: ${error.url}`)
        }
        console.log('')
      })
    }

    if (this.warnings.length > 0) {
      console.log(
        `\n${colors.yellow}${colors.bold}⚠️  Warnings:${colors.reset}`
      )
      this.warnings.forEach(warning => {
        console.log(`  ${colors.yellow}!${colors.reset} ${warning.file}`)
        console.log(`    ${warning.message}`)
        console.log('')
      })
    }

    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log(
        `\n${colors.green}${colors.bold}✅ All links verified successfully!${colors.reset}`
      )
    }

    console.log(`\n${colors.bold}📊 Link Verification Results${colors.reset}`)
    console.log(`Files checked: ${this.checkedFiles.size}`)
    console.log(`Errors: ${this.errors.length}`)
    console.log(`Warnings: ${this.warnings.length}`)
  }
}

// Run verification if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const verifier = new LinkVerifier()
  const success = await verifier.verify()
  process.exit(success ? 0 : 1)
}

export { LinkVerifier }
