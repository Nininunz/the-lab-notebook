'use client'
import React from 'react'

/**
 * CSS PhotoGrid component using CSS Grid for responsive image layouts
 *
 * @param {React.ReactNode} children - Image components or other content to display in the grid
 * @param {number} [columns=3] - Number of columns in the grid
 * @param {string} [gap='1rem'] - Gap between grid items (CSS gap value)
 * @param {string} [className=''] - Additional CSS classes to apply
 *
 * @example
 * ```jsx
 * <PhotoGrid columns={2} gap="1.5rem">
 *   <AutoLightboxImage src="/image1.jpg" alt="Description" />
 *   <AutoLightboxImage src="/image2.jpg" alt="Description" />
 * </PhotoGrid>
 * ```
 */
export default function PhotoGrid({
  children,
  columns = 3,
  gap = '1rem',
  className = '',
}) {
  // photoStyle removed (was unused)

  const responsiveStyle = `
    .photo-grid {
      display: grid;
      grid-template-columns: repeat(${columns}, 1fr);
      gap: ${gap};
      align-items: start;
    }
  `

  return (
    <>
      <div className={`photo-grid ${className}`}>{children}</div>
      <style jsx>{responsiveStyle}</style>
    </>
  )
}
