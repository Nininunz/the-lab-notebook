#!/usr/bin/env node
/* eslint-disable no-console */

import path from 'path'
import { Project } from 'ts-morph'

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

const PROJECTS_PATH = path.resolve('lib/project-directory.ts')
const TYPE_PATH = path.resolve('lib/project-directory.d.ts')

function getTypeKeys(typePath, typeName) {
  const project = new Project()
  const sourceFile = project.addSourceFileAtPath(typePath)
  const iface = sourceFile.getInterface(typeName)
  if (!iface) return []
  return iface.getProperties().map(p => p.getName())
}

function getUnionTypeValues(typePath, typeName) {
  const project = new Project()
  const sourceFile = project.addSourceFileAtPath(typePath)
  const typeAlias = sourceFile.getTypeAlias(typeName)
  if (!typeAlias) return []

  const typeNode = typeAlias.getTypeNode()
  if (
    !typeNode ||
    (typeNode.getKindName() !== 'UnionTypeNode' &&
      typeNode.getKindName() !== 'UnionType')
  )
    return []

  const typeNodes = typeNode.getTypeNodes()

  return typeNodes
    .filter(
      node =>
        node.getKindName() === 'LiteralType' ||
        node.getKindName() === 'LiteralTypeNode'
    )
    .map(node => {
      const literal = node.getLiteral()
      if (
        literal &&
        (literal.getKindName() === 'StringLiteral' ||
          literal.getKindName() === 'StringLiteralExpression')
      ) {
        return literal.getLiteralValue()
      }
      return null
    })
    .filter(Boolean)
}

function getProjectEntries(projectsPath) {
  const project = new Project()
  const sourceFile = project.addSourceFileAtPath(projectsPath)
  const exportVar = sourceFile.getVariableDeclaration('projects')
  if (!exportVar) return []
  const arr = exportVar.getInitializer()
  if (
    !arr ||
    !arr.getKindName ||
    arr.getKindName() !== 'ArrayLiteralExpression'
  )
    return []
  return arr
    .getElements()
    .map(e => {
      try {
        // Convert to JS object
        return eval('(' + e.getText() + ')')
      } catch {
        return null
      }
    })
    .filter(Boolean)
}

function main() {
  const typeKeys = getTypeKeys(TYPE_PATH, 'Project')
  const featureKeys = new Set(getTypeKeys(TYPE_PATH, 'Feature'))
  const validStatuses = new Set(getUnionTypeValues(TYPE_PATH, 'ProjectStatus'))
  const validDomains = new Set(getUnionTypeValues(TYPE_PATH, 'ProjectDomain'))
  const entries = getProjectEntries(PROJECTS_PATH)

  if (!entries.length) {
    console.log(
      `${colors.red}ERROR:${colors.reset} Could not parse project entries.`
    )
    process.exit(1)
  }

  console.log(
    `${colors.cyan}${colors.bold}Scanning project directory entries...${colors.reset}\n`
  )
  console.log(
    `${colors.blue}Expected keys:${colors.reset} ${typeKeys.join(', ')}\n`
  )
  console.log(
    `${colors.blue}Valid statuses:${colors.reset} ${Array.from(validStatuses).join(', ')}\n`
  )
  console.log(
    `${colors.blue}Valid domains:${colors.reset} ${Array.from(validDomains).join(', ')}\n`
  )

  const criticalKeys = new Set(['id', 'name', 'href', 'domains'])
  const missingCritical = {}
  const missingWarning = {}
  const extraByKey = {}
  const invalidValues = {}
  let errorCount = 0
  let warningCount = 0
  let totalWarnings = 0
  let totalErrors = 0

  entries.forEach((entry, idx) => {
    const entryKeys = Object.keys(entry)
    const missing = typeKeys.filter(k => !(k in entry))
    const extra = entryKeys.filter(k => !typeKeys.includes(k))

    let missingCriticalKeys = missing.filter(k => criticalKeys.has(k))
    const missingWarningKeys = missing.filter(k => !criticalKeys.has(k))

    // Validate status field if present
    if (entry.status && !validStatuses.has(entry.status)) {
      const statusKey = 'status'
      if (!invalidValues[statusKey]) invalidValues[statusKey] = []
      invalidValues[statusKey].push({
        index: idx + 1,
        name: entry.name || 'Unnamed',
        id: entry.id || 'missing',
        value: entry.status,
      })
    }

    // Validate domains field if present
    if (entry.domains && Array.isArray(entry.domains)) {
      entry.domains.forEach((domain, domainIdx) => {
        if (!validDomains.has(domain)) {
          const domainKey = 'domains'
          if (!invalidValues[domainKey]) invalidValues[domainKey] = []
          invalidValues[domainKey].push({
            index: idx + 1,
            name: entry.name || 'Unnamed',
            id: entry.id || 'missing',
            value: domain,
            arrayIndex: domainIdx,
          })
        }
      })
    }

    // If project has features, treat feature fields as critical
    if (
      entry.feature &&
      Array.isArray(entry.feature) &&
      entry.feature.length > 0
    ) {
      entry.feature.forEach((feature, featureIdx) => {
        if (feature && typeof feature === 'object') {
          const featureMissing = Array.from(featureKeys).filter(
            k => !(k in feature)
          )
          featureMissing.forEach(key => {
            const featureKey = `feature[${featureIdx}].${key}`
            if (!missingCritical[featureKey]) missingCritical[featureKey] = []
            missingCritical[featureKey].push({
              index: idx + 1,
              name: entry.name || 'Unnamed',
              id: entry.id || 'missing',
            })
          })
          if (featureMissing.length > 0) {
            missingCriticalKeys = [
              ...missingCriticalKeys,
              ...featureMissing.map(k => `feature[${featureIdx}].${k}`),
            ]
          }
        }
      })
    }

    const hasInvalidStatus = entry.status && !validStatuses.has(entry.status)
    const hasInvalidDomain =
      entry.domains &&
      Array.isArray(entry.domains) &&
      entry.domains.some(domain => !validDomains.has(domain))

    if (
      missingCriticalKeys.length ||
      extra.length ||
      hasInvalidStatus ||
      hasInvalidDomain
    ) {
      errorCount++
    }

    if (missingWarningKeys.length) {
      warningCount++
    }

    // Count total errors (individual error issues)
    totalErrors +=
      missingCriticalKeys.length +
      extra.length +
      (hasInvalidStatus ? 1 : 0) +
      (hasInvalidDomain
        ? entry.domains.filter(d => !validDomains.has(d)).length
        : 0)

    // Count total warnings (individual missing optional fields)
    totalWarnings += missingWarningKeys.length

    // Handle regular missing critical keys (not feature keys)
    missing
      .filter(k => criticalKeys.has(k))
      .forEach(key => {
        if (!missingCritical[key]) missingCritical[key] = []
        missingCritical[key].push({
          index: idx + 1,
          name: entry.name || 'Unnamed',
          id: entry.id || 'missing',
        })
      })

    missingWarningKeys.forEach(key => {
      if (!missingWarning[key]) missingWarning[key] = []
      missingWarning[key].push({
        index: idx + 1,
        name: entry.name || 'Unnamed',
        id: entry.id || 'missing',
      })
    })

    extra.forEach(key => {
      if (!extraByKey[key]) extraByKey[key] = []
      extraByKey[key].push({
        index: idx + 1,
        name: entry.name || 'Unnamed',
        id: entry.id || 'missing',
      })
    })
  })

  const totalIssues = errorCount + warningCount

  if (totalIssues === 0) {
    console.log(
      `${colors.green}${colors.bold}SUCCESS:${colors.reset} All entries are valid! No issues found.`
    )
  } else {
    if (Object.keys(missingCritical).length > 0) {
      console.log(
        `${colors.red}${colors.bold}ERRORS - Missing Critical Keys:${colors.reset}\n`
      )
      Object.entries(missingCritical).forEach(([key, entryList]) => {
        console.log(
          `  ${colors.red}${colors.bold}"${key}"${colors.reset} missing in ${colors.bold}${entryList.length}${colors.reset} entries:`
        )
        entryList.forEach(entry => {
          console.log(
            `    ${colors.gray}•${colors.reset} Entry ${colors.blue}${entry.index}${colors.reset}: "${entry.name}" (${colors.gray}${entry.id}${colors.reset})`
          )
        })
        console.log()
      })
    }

    if (Object.keys(extraByKey).length > 0) {
      console.log(
        `${colors.red}${colors.bold}ERRORS - Extra Keys:${colors.reset}\n`
      )
      Object.entries(extraByKey).forEach(([key, entryList]) => {
        console.log(
          `  ${colors.red}${colors.bold}"${key}"${colors.reset} found in ${colors.bold}${entryList.length}${colors.reset} entries:`
        )
        entryList.forEach(entry => {
          console.log(
            `    ${colors.gray}•${colors.reset} Entry ${colors.blue}${entry.index}${colors.reset}: "${entry.name}" (${colors.gray}${entry.id}${colors.reset})`
          )
        })
        console.log()
      })
    }

    if (Object.keys(invalidValues).length > 0) {
      console.log(
        `${colors.red}${colors.bold}ERRORS - Invalid Values:${colors.reset}\n`
      )
      Object.entries(invalidValues).forEach(([key, entryList]) => {
        console.log(
          `  ${colors.red}${colors.bold}"${key}"${colors.reset} has invalid values in ${colors.bold}${entryList.length}${colors.reset} entries:`
        )
        entryList.forEach(entry => {
          const arrayInfo =
            entry.arrayIndex !== undefined ? `[${entry.arrayIndex}]` : ''
          console.log(
            `    ${colors.gray}•${colors.reset} Entry ${colors.blue}${entry.index}${colors.reset}: "${entry.name}" (${colors.gray}${entry.id}${colors.reset})${arrayInfo} - value: ${colors.red}"${entry.value}"${colors.reset}`
          )
        })
        console.log()
      })
    }

    if (Object.keys(missingWarning).length > 0) {
      console.log(
        `${colors.yellow}${colors.bold}WARNINGS - Missing Optional Keys:${colors.reset}\n`
      )
      Object.entries(missingWarning).forEach(([key, entryList]) => {
        console.log(
          `  ${colors.yellow}"${key}"${colors.reset} missing in ${colors.bold}${entryList.length}${colors.reset} entries:`
        )
        entryList.forEach(entry => {
          console.log(
            `    ${colors.gray}•${colors.reset} Entry ${colors.blue}${entry.index}${colors.reset}: "${entry.name}" (${colors.gray}${entry.id}${colors.reset})`
          )
        })
        console.log()
      })
    }

    const errorSummary =
      errorCount > 0
        ? `${colors.red}${colors.bold}${errorCount} entries with errors${colors.reset} (${colors.red}${totalErrors} total errors${colors.reset})`
        : ''
    const warningSummary =
      warningCount > 0
        ? `${colors.yellow}${colors.bold}${warningCount} entries with warnings${colors.reset} (${colors.yellow}${totalWarnings} total warnings${colors.reset})`
        : ''
    const summaryParts = [errorSummary, warningSummary].filter(Boolean)

    console.log(
      `${colors.magenta}Summary:${colors.reset} ${summaryParts.join(' and ')} out of ${colors.bold}${entries.length}${colors.reset} entries.`
    )
  }

  console.log(`\n${colors.cyan}Scan complete.${colors.reset}`)

  // Exit with error code if any errors were found
  if (errorCount > 0) {
    process.exit(1)
  }
}

main()
