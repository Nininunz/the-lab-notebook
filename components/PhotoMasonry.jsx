'use client'
import React from 'react'
import LightboxImage from './BaseLightboxImage'

/**
 * PhotoMasonry component for displaying images in a masonry layout
 *
 * Usage:
 * <PhotoMasonry
 *   photos={[
 *     {
 *       src: "/images/valve1.webp",
 *       largeSrc: "/images/valve1.png",
 *       alt: "Carbon buildup on valve",
 *       caption: "Notice the thick carbon coating"
 *     },
 *     // ... more photos
 *   ]}
 *   columns={3} // optional, defaults to responsive
 * />
 */
export default function PhotoMasonry({
  photos,
  columns = 'auto',
  gap = '1rem',
}) {
  // columnCount removed (was unused)

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns:
      columns === 'auto'
        ? 'repeat(auto-fit, minmax(300px, 1fr))'
        : `repeat(${columns}, 1fr)`,
    gap: gap,
    marginBottom: '2rem',
  }

  return (
    <div style={gridStyle} className='photo-masonry'>
      {photos.map(photo => (
        <div key={photo.src} className='photo-item'>
          <LightboxImage
            src={photo.src}
            largeSrc={photo.largeSrc}
            alt={photo.alt}
            width={photo.width || 400}
            height={photo.height || 300}
          />
          {photo.caption && (
            <p
              style={{
                marginTop: '0.5rem',
                fontSize: '0.875rem',
                color: '#6b7280',
                textAlign: 'center',
                fontStyle: 'italic',
              }}
              className='photo-caption'
            >
              {photo.caption}
            </p>
          )}
        </div>
      ))}

      <style jsx>{`
        .photo-masonry {
          --columns: ${columns === 'auto' ? 'auto-fit' : columns};
        }

        @media (max-width: 640px) {
          .photo-masonry {
            grid-template-columns: 1fr !important;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .photo-masonry {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        .photo-item {
          break-inside: avoid;
          margin-bottom: 0;
        }

        .photo-item img {
          transition: transform 0.2s ease-in-out;
        }

        .photo-item img:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  )
}
