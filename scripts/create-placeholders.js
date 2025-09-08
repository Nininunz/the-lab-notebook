#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const placeholderDir = path.join(__dirname, '../public/images/placeholders')

// Ensure directory exists
if (!fs.existsSync(placeholderDir)) {
  fs.mkdirSync(placeholderDir, { recursive: true })
}

// Common aspect ratios
const ratios = [
  { name: '16-9', width: 1600, height: 900, label: '16:9 Widescreen' },
  { name: '4-3', width: 1200, height: 900, label: '4:3 Traditional' },
  { name: '1-1', width: 800, height: 800, label: '1:1 Square' },
  { name: '3-2', width: 1200, height: 800, label: '3:2 Standard Photo' },
  { name: '2-3', width: 800, height: 1200, label: '2:3 Portrait Photo' },
  { name: '3-4', width: 900, height: 1200, label: '3:4 Portrait' },
  { name: '5-3', width: 1250, height: 750, label: '5:3 Wide Photo' },
  { name: '3-5', width: 750, height: 1250, label: '3:5 Tall Photo' },
  { name: '21-9', width: 2100, height: 900, label: '21:9 Ultra-wide' },
  { name: '9-16', width: 900, height: 1600, label: '9:16 Portrait' },
  { name: '9-21', width: 900, height: 2100, label: '9:21 Tall Portrait' },
]

// Color palette
const colors = [
  '#6366f1', // Indigo
  '#8b5cf6', // Violet
  '#06b6d4', // Cyan
  '#10b981', // Emerald
  '#f59e0b', // Amber
  '#ef4444', // Red
]

function createSVGPlaceholder(ratio, colorIndex) {
  const color = colors[colorIndex % colors.length]
  const textColor = '#ffffff'

  const svg = `<svg width="${ratio.width}" height="${ratio.height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}"/>
  <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" 
        font-family="system-ui, -apple-system, sans-serif" font-size="48" 
        font-weight="600" fill="${textColor}">${ratio.label}</text>
  <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" 
        font-family="system-ui, -apple-system, sans-serif" font-size="32" 
        font-weight="400" fill="${textColor}" opacity="0.8">${ratio.width} × ${ratio.height}</text>
</svg>`

  return svg
}

// Create placeholders
ratios.forEach((ratio, index) => {
  const svg = createSVGPlaceholder(ratio, index)
  const filename = `placeholder-${ratio.name}.svg`
  const filepath = path.join(placeholderDir, filename)

  fs.writeFileSync(filepath, svg)
  // eslint-disable-next-line no-console
  console.log(`Created: ${filename}`)
})

// eslint-disable-next-line no-console
console.log(
  `\nCreated ${ratios.length} placeholder images in public/images/placeholders/`
)
// eslint-disable-next-line no-console
console.log('\nUsage examples:')
ratios.forEach(ratio => {
  // eslint-disable-next-line no-console
  console.log(
    `<AutoLightboxImage keyName="placeholder-${ratio.name}" parentDir="placeholders" alt="${ratio.label} placeholder" aspectRatio="${ratio.name.replace('-', '/')}" />`
  )
})
