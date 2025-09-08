'use client'
import React from 'react'
import LightboxImage from './BaseLightboxImage'

/**
 * CSS Masonry component using CSS Grid for better performance
 *
 * Usage:
 * <Masonry columns={3}>
 *   <LightboxImage src="/path/to/image1.jpg" alt="Description" />
 *   <LightboxImage src="/path/to/image2.jpg" alt="Description" />
 *   ...
 * </Masonry>
 *
 * Or with photo objects:
 * <Masonry
 *   columns={3}
 *   photos={[
 *     { src: "/image1.jpg", alt: "Description", caption: "Optional caption" }
 *   ]}
 * />
 */
export default function Masonry({
  children,
  photos,
  columns = 3,
  gap = '1rem',
  className = '',
}) {
  // masonryStyle removed (was unused)

  const responsiveStyle = `
    .masonry-grid {
      display: grid;
      grid-template-columns: repeat(${columns}, 1fr);
      gap: ${gap};
      align-items: start;
    }

    @media (max-width: 768px) {
      .masonry-grid {
        grid-template-columns: repeat(${Math.min(2, columns)}, 1fr);
      }
    }

    @media (max-width: 480px) {
      .masonry-grid {
        grid-template-columns: 1fr;
      }
    }

    .masonry-item {
      break-inside: avoid;
      margin-bottom: 0;
    }

    .masonry-item img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }

    .masonry-item img:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .photo-caption {
      margin-top: 0.5rem;
      margin-bottom: 0;
      padding: 0 0.5rem;
      font-size: 0.875rem;
      color: #6b7280;
      text-align: center;
      font-style: italic;
      line-height: 1.4;
    }
  `

  if (photos) {
    return (
      <>
        <div className={`masonry-grid ${className}`}>
          {photos.map(photo => (
            <div key={photo.src} className='masonry-item'>
              <LightboxImage
                src={photo.src}
                largeSrc={photo.largeSrc}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
              />
              {photo.caption && (
                <p className='photo-caption'>{photo.caption}</p>
              )}
            </div>
          ))}
        </div>
        <style jsx>{responsiveStyle}</style>
      </>
    )
  }

  return (
    <>
      <div className={`masonry-grid ${className}`}>
        {React.Children.map(children, (child, index) => (
          <div key={child.key || index} className='masonry-item'>
            {child}
          </div>
        ))}
      </div>
      <style jsx>{responsiveStyle}</style>
    </>
  )
}
