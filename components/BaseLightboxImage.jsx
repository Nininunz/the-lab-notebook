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
          className='fixed inset-0 bg-black/90 flex items-center justify-center z-[1000] cursor-pointer'
          onClick={handleClose}
        >
          <button
            onClick={handleDownload}
            className='absolute top-5 right-[70px] bg-white/10 border-0 rounded-full w-10 h-10 text-white cursor-pointer flex items-center justify-center z-[1001] hover:bg-white/20 transition-colors'
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
            className='absolute top-5 right-5 bg-white/10 border-0 rounded-full w-10 h-10 text-white cursor-pointer flex items-center justify-center z-[1001] hover:bg-white/20 transition-colors'
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
            className='max-w-[90vw] max-h-[90vh] object-contain w-auto h-auto rounded-xl'
            onClick={handleImageClick}
          />
        </div>
      )}
    </>
  )
}
