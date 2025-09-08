'use client'
/**
 * Auto-resolving LightboxImage component
 *
 * Combines direct image path construction with LightboxImage for seamless MDX usage.
 * Provides lightbox functionality with configurable image paths.
 */
import BaseLightboxImage from './BaseLightboxImage'

/**
 * Lightbox image component with direct path construction
 *
 * @param {Object} props
 * @param {string} props.src - Direct image source path
 * @param {string} [props.largeSrc] - Optional large image source for lightbox
 * @param {string} props.alt - Alt text for the image
 * @param {number} [props.width=1000] - Image width
 * @param {number} [props.height=750] - Image height
 * @param {string} [props.aspectRatio] - Aspect ratio (e.g., '16/9', '4/3', '1/1')
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {Object} [props.style={}] - Additional inline styles
 *
 * @example
 * ```jsx
 * <AutoLightboxImage
 *   src="/images/homelink-retrofit/connector-wiring.webp"
 *   largeSrc="/images/homelink-retrofit/original/connector-wiring.webp"
 *   alt="Wiring Diagram"
 *   width={600}
 *   aspectRatio="16/9"
 * />
 * ```
 */
export default function AutoLightboxImage({
  src,
  largeSrc,
  alt,
  width = 1000,
  height = 750,
  aspectRatio,
  className = '',
  style = {},
  ...props
}) {
  if (!src) {
    throw new Error('src is required for AutoLightboxImage')
  }

  // Create style object with aspect ratio and hover effects
  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    ...(aspectRatio && { aspectRatio, objectFit: 'cover' }),
    ...style,
  }

  const imageClassName = `lightbox-image ${className}`.trim()

  return (
    <>
      <BaseLightboxImage
        src={src}
        largeSrc={largeSrc || src}
        alt={alt}
        width={width}
        height={height}
        className={imageClassName}
        style={imageStyle}
        aspectRatio={aspectRatio}
        {...props}
      />
      <style jsx>{`
        :global(.lightbox-image:hover) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </>
  )
}
