/**
 * Production-ready image resolution utility for MDX files
 *
 * Resolves image paths by basename and parent directory, with automatic
 * extension detection and Next.js Image component integration.
 *
 * @example Basic usage
 * ```jsx
 * import { resolveImagePath, ImageFromKey } from '@/lib/resolveImage';
 *
 * // In MDX file at app/docs/engine/overview.mdx
 * const src = resolveImagePath({
 *   keyName: 'engine-top-view',
 *   parentDir: 'engine'
 * });
 * // Returns: /images/engine/engine-top-view.webp (if it exists)
 *
 * // Or use the Next.js Image wrapper
 * <ImageFromKey
 *   keyName="engine-top-view"
 *   parentDir="engine"
 *   alt="Engine top view"
 *   width={800}
 *   height={600}
 * />
 * ```
 *
 * @example Custom configuration
 * ```jsx
 * const src = resolveImagePath({
 *   keyName: 'diagram-flow',
 *   parentDir: 'architecture',
 *   basePublicDir: 'public/assets/images',
 *   extensions: ['avif', 'webp', 'png', 'jpg'],
 *   fallback: '/images/placeholder.png'
 * });
 * ```
 */

import { existsSync } from 'fs'
import { join } from 'path'

/**
 * Default extension priority order optimized for web performance
 */
const DEFAULT_EXTENSIONS = ['webp', 'avif', 'png', 'jpg', 'jpeg', 'gif', 'svg']

/**
 * Default base directory for public images
 */
const DEFAULT_BASE_PUBLIC_DIR = 'public/images'

/**
 * Resolves an image path by auto-detecting the file extension
 *
 * Searches for the image file in priority order of extensions,
 * returning the web-accessible path for the first match found.
 *
 * @param {Object} options - Configuration options
 * @param {string} options.keyName - Image basename without extension (required)
 * @param {string} options.parentDir - Parent directory name from MDX file location (required)
 * @param {string} [options.basePublicDir='public/images'] - Base public directory path
 * @param {string[]} [options.extensions] - Extension priority order
 * @param {string} [options.fallback] - Fallback path if no image found
 * @returns {string} Web-accessible image path (e.g., "/images/engine/engine-diagram.webp")
 * @throws {Error} If no image found and no fallback provided
 *
 * @example
 * ```jsx
 * const imagePath = resolveImagePath({
 *   keyName: 'engine-diagram',
 *   parentDir: 'mechanics'
 * });
 * // Returns: "/images/mechanics/engine-diagram.webp"
 * ```
 */
export function resolveImagePath(options) {
  const {
    keyName,
    parentDir,
    basePublicDir = DEFAULT_BASE_PUBLIC_DIR,
    extensions = DEFAULT_EXTENSIONS,
    fallback,
  } = options

  if (!keyName?.trim()) {
    throw new Error('keyName is required and cannot be empty')
  }

  if (!parentDir?.trim()) {
    throw new Error('parentDir is required and cannot be empty')
  }

  const attemptedPaths = []
  const webPathBase = basePublicDir.replace(/^public/, '')

  // Try each extension in priority order
  for (const ext of extensions) {
    const filename = `${keyName.trim()}.${ext}`
    const fullPath = join(basePublicDir, parentDir.trim(), filename)
    const webPath = `${webPathBase}/${parentDir.trim()}/${filename}`.replace(
      /\/+/g,
      '/'
    )

    attemptedPaths.push(fullPath)

    if (existsSync(fullPath)) {
      return webPath
    }
  }

  // No image found
  if (fallback) {
    return fallback
  }

  throw new Error(
    `No image found for keyName "${keyName}" in parentDir "${parentDir}". ` +
      `Attempted paths:\n${attemptedPaths.map(p => `  - ${p}`).join('\n')}`
  )
}

/**
 * Next.js Image component wrapper that automatically resolves image paths
 *
 * Combines path resolution with Next.js Image optimization.
 * Passes through all standard Image props while handling src resolution.
 *
 * @param {Object} props - Component props including keyName, parentDir, and all Image props
 * @param {string} props.keyName - Image basename without extension
 * @param {string} props.parentDir - Parent directory name from MDX file location
 * @param {string} [props.basePublicDir] - Base public directory path
 * @param {string[]} [props.extensions] - Extension priority order
 * @param {string} [props.fallback] - Fallback path if image not found
 * @returns {React.ReactElement} Next.js Image component with resolved src
 *
 * @example
 * ```jsx
 * <ImageFromKey
 *   keyName="engine-cutaway"
 *   parentDir="mechanical"
 *   alt="Engine cutaway view"
 *   width={800}
 *   height={600}
 *   sizes="(max-width: 768px) 100vw, 800px"
 *   priority
 * />
 * ```
 */
export function ImageFromKey({
  keyName,
  parentDir,
  basePublicDir,
  extensions,
  fallback,
  ...imageProps
}) {
  // This function requires Next.js environment - import dynamically
  const src = resolveImagePath({
    keyName,
    parentDir,
    basePublicDir,
    extensions,
    fallback,
  })

  // Dynamic import of React and Next.js Image component
  try {
    const React = require('react')
    const Image = require('next/image').default
    return React.createElement(Image, { ...imageProps, src })
  } catch (e) {
    throw new Error(
      'ImageFromKey component requires Next.js environment. Use resolveImagePath() in Node.js environments.'
    )
  }
}

/**
 * Utility function to extract parent directory from file path
 *
 * Helper for cases where you need to determine parentDir from the current file path.
 *
 * @param {string} filePath - Full file path (e.g., "app/docs/engine/overview.mdx")
 * @returns {string} Parent directory name (e.g., "engine")
 *
 * @example
 * ```jsx
 * // In a remark plugin or MDX context
 * const parentDir = extractParentDir(file.path);
 * const imageSrc = resolveImagePath({ keyName: 'diagram', parentDir });
 * ```
 */
export function extractParentDir(filePath) {
  if (!filePath) {
    throw new Error('filePath is required')
  }

  const normalized = filePath.replace(/\\/g, '/')
  const parts = normalized.split('/').filter(Boolean)

  if (parts.length < 2) {
    throw new Error(`Cannot extract parent directory from path: ${filePath}`)
  }

  // Get the parent directory (second to last part)
  const parentDir = parts[parts.length - 2]

  if (!parentDir) {
    throw new Error(`Invalid parent directory extracted from path: ${filePath}`)
  }

  return parentDir
}

/**
 * Type guard to check if a string is a valid image extension
 *
 * @param {string} ext - File extension to check
 * @returns {boolean} True if the extension is a valid image format
 */
export function isValidImageExtension(ext) {
  const validExtensions = [
    'webp',
    'avif',
    'png',
    'jpg',
    'jpeg',
    'gif',
    'svg',
    'bmp',
    'tiff',
  ]
  return validExtensions.includes(ext.toLowerCase())
}

/**
 * Get all available image variants for a given keyName and parentDir
 *
 * Useful for debugging or providing alternative formats.
 *
 * @param {Object} options - Same options as resolveImagePath
 * @returns {Array<{path: string, extension: string}>} Array of available image paths with their extensions
 */
export function getAvailableImageVariants(options) {
  const {
    keyName,
    parentDir,
    basePublicDir = DEFAULT_BASE_PUBLIC_DIR,
    extensions = DEFAULT_EXTENSIONS,
  } = options

  const webPathBase = basePublicDir.replace(/^public/, '')
  const variants = []

  for (const ext of extensions) {
    const filename = `${keyName.trim()}.${ext}`
    const fullPath = join(basePublicDir, parentDir.trim(), filename)
    const webPath = `${webPathBase}/${parentDir.trim()}/${filename}`.replace(
      /\/+/g,
      '/'
    )

    if (existsSync(fullPath)) {
      variants.push({ path: webPath, extension: ext })
    }
  }

  return variants
}
