'use client'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import React, { useState, useCallback } from 'react'
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
  const renderButtonPrev = useCallback(() => null, [])
  const renderButtonNext = useCallback(() => null, [])

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
      <Lightbox
        open={open}
        close={handleClose}
        slides={[{ src: largeSrc || src, alt }]}
        carousel={{ finite: true }}
        render={{
          buttonPrev: renderButtonPrev,
          buttonNext: renderButtonNext,
        }}
      />
    </>
  )
}
