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
 * @param {string} [props.aspectRatio] - Aspect ratio (e.g., '16/9', '4/3', '1/1') - automatically uses matching placeholder as fallback
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {Object} [props.style={}] - Additional inline styles
 * @param {string} [props.basePublicDir] - Custom base directory
 * @param {string[]} [props.extensions] - Custom extension priority
 * @param {string} [props.fallback] - Custom fallback path (overrides automatic aspect ratio fallback)
 *
 * @example
 * ```jsx
 * <AutoLightboxImage
 *   keyName="connector-wiring"
 *   parentDir="homelink-retrofit"
 *   alt="Wiring Diagram"
 *   width={600}
 *   aspectRatio="16/9"
 * />
 * ```
 */
export default function AutoLightboxImage({
  keyName,
  parentDir,
  alt,
  width = 1000,
  height = 750,
  aspectRatio,
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

  // Generate aspect ratio-based fallback if aspectRatio is provided
  const getAspectRatioFallback = ratio => {
    if (!ratio) return fallback

    const ratioMap = {
      '16/9': 'placeholder-16-9',
      '4/3': 'placeholder-4-3',
      '1/1': 'placeholder-1-1',
      '3/2': 'placeholder-3-2',
      '2/3': 'placeholder-2-3',
      '3/4': 'placeholder-3-4',
      '5/3': 'placeholder-5-3',
      '3/5': 'placeholder-3-5',
      '21/9': 'placeholder-21-9',
      '9/16': 'placeholder-9-16',
      '9/21': 'placeholder-9-21',
    }

    const placeholderKey = ratioMap[ratio]
    if (placeholderKey) {
      try {
        return resolveImagePath({
          keyName: placeholderKey,
          parentDir: 'placeholders',
          basePublicDir,
          extensions: ['svg'],
          fallback: null,
        })
      } catch {
        return fallback
      }
    }

    return fallback
  }

  const aspectRatioFallback = getAspectRatioFallback(aspectRatio)

  // Auto-resolve display image path
  let src
  try {
    src = resolveImagePath({
      keyName,
      parentDir,
      basePublicDir,
      extensions,
      fallback: aspectRatioFallback,
    })
  } catch {
    // If image resolution fails, use the aspect ratio fallback
    src = aspectRatioFallback || '/images/placeholders/placeholder-16-9.svg'
  }

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
  } catch {
    // No original found, use display image for lightbox
    largeSrc = src
  }

  // Create style object with aspect ratio if provided
  const imageStyle = aspectRatio
    ? { aspectRatio, objectFit: 'cover', ...style }
    : style

  return (
    <LightboxImage
      src={src}
      largeSrc={largeSrc}
      alt={alt || keyName}
      width={width}
      height={height}
      className={className}
      style={imageStyle}
      aspectRatio={aspectRatio}
      {...props}
    />
  )
}
