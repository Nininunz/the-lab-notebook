/**
 * Auto-resolving LightboxImage component using the new resolveImage.js utility
 *
 * Combines the resolveImage utility with LightboxImage for seamless MDX usage.
 * Automatically detects the best available image format and provides lightbox functionality.
 */
import LightboxImage from './LightboxImage'
import { resolveImagePath } from '@/lib/resolveImage'

/**
 * Auto-resolving lightbox image component
 *
 * @param {Object} props
 * @param {string} props.keyName - Image basename without extension
 * @param {string} props.parentDir - Parent directory name from MDX file location
 * @param {string} props.alt - Alt text for the image
 * @param {number} [props.width=800] - Image width
 * @param {number} [props.height=600] - Image height
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {Object} [props.style={}] - Additional inline styles
 * @param {string} [props.basePublicDir] - Custom base directory
 * @param {string[]} [props.extensions] - Custom extension priority
 * @param {string} [props.fallback] - Fallback path if image not found
 *
 * @example
 * ```jsx
 * <AutoLightboxImage
 *   keyName="connector-wiring"
 *   parentDir="homelink-retrofit"
 *   alt="Wiring Diagram"
 *   width={600}
 * />
 * ```
 */
export default function AutoLightboxImage({
  keyName,
  parentDir,
  alt,
  width = 800,
  height = 600,
  className = '',
  style = {},
  basePublicDir,
  extensions,
  fallback,
  ...props
}) {
  // For now, require parentDir to be explicitly passed
  // TODO: In the future, we could implement build-time path resolution
  if (!parentDir) {
    throw new Error('parentDir is required for AutoLightboxImage')
  }

  // Auto-resolve display image path
  const src = resolveImagePath({
    keyName,
    parentDir,
    basePublicDir,
    extensions,
    fallback,
  })

  // Try to find original image (for lightbox) using auto-detection
  let largeSrc = src // Default to display image

  try {
    // Check for original image in /original subdirectory with auto-detection
    const originalSrc = resolveImagePath({
      keyName,
      parentDir: `${parentDir}/original`,
      basePublicDir,
      extensions,
      fallback: null,
    })
    largeSrc = originalSrc
  } catch (e) {
    // No original found, use display image for lightbox
    largeSrc = src
  }

  return (
    <LightboxImage
      src={src}
      largeSrc={largeSrc}
      alt={alt || keyName}
      width={width}
      height={height}
      className={className}
      style={style}
      {...props}
    />
  )
}
