/**
 * Auto-resolving LightboxImage component using the new resolveImage.ts utility
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
  // Auto-resolve display image path
  const src = resolveImagePath({
    keyName,
    parentDir,
    basePublicDir,
    extensions,
    fallback,
  })

  // Try to find original image (for lightbox)
  // Build expected original path - try common formats
  let largeSrc = src // Default to display image

  // For homelink: connector* are JPG, others may be PNG
  if (parentDir.includes('homelink')) {
    const originalExt = keyName.includes('connector')
      ? 'jpg'
      : keyName.includes('compass-calibration')
        ? 'png'
        : keyName.includes('mirror-') && keyName.includes('removal')
          ? 'png'
          : keyName.includes('mirror-connection')
            ? 'png'
            : 'jpg'
    largeSrc = `/images/${parentDir}/original/${keyName}.${originalExt}`
  } else {
    // For other projects, assume JPG
    largeSrc = `/images/${parentDir}/original/${keyName}.jpg`
  }

  return (
    <LightboxImage
      src={src}
      largeSrc={largeSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      {...props}
    />
  )
}
