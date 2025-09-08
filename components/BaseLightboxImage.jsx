'use client'
import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'

export default function BaseLightboxImage({
  src,
  largeSrc,
  alt,
  width = 1000,
  height = 750,
  className = '',
  style = {},
  aspectRatio,
}) {
  const [open, setOpen] = useState(false)

  const defaultStyle = {
    width: '100%',
    height: aspectRatio ? undefined : 'auto',
    borderRadius: '8px',
    cursor: 'pointer',
    ...style,
  }

  const handleOpen = useCallback(() => setOpen(true), [])
  const handleClose = useCallback(() => setOpen(false), [])
  const handleImageClick = useCallback(e => e.stopPropagation(), [])
  const handleDownload = useCallback(() => {
    const link = document.createElement('a')
    link.href = largeSrc || src
    link.download = alt || 'image'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [largeSrc, src, alt])

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape' && open) {
        handleClose()
      }
    }

    if (open) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, handleClose])

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={defaultStyle}
        onClick={handleOpen}
      />

      {open && (
        <div
          className='lightbox-overlay'
          onClick={handleClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer',
          }}
        >
          <button
            onClick={handleDownload}
            style={{
              position: 'absolute',
              top: '20px',
              right: '70px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1001,
            }}
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            >
              <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3' />
            </svg>
          </button>
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1001,
            }}
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            >
              <path d='M18 6L6 18M6 6L18 18' />
            </svg>
          </button>
          <Image
            src={largeSrc || src}
            alt={alt}
            width={1920}
            height={1080}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              width: 'auto',
              height: 'auto',
              borderRadius: '12px',
            }}
            onClick={handleImageClick}
          />
        </div>
      )}
    </>
  )
}
