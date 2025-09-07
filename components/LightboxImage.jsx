'use client'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import React, { useState } from 'react'
import Image from 'next/image'

/**
 * Usage:
 * // With image utility (recommended)
 * <LightboxImage
 *   {...HomelinkImages.getPaths('mirror-connection')}
 *   alt="Unplug connector"
 * />
 *
 * // Manual paths (still supported)
 * <LightboxImage
 *   src="/images/homelink-retrofit/mirror-connection.webp"
 *   largeSrc="/images/homelink-retrofit/original/mirror-connection.png"
 *   alt="Unplug connector"
 * />
 */
export default function LightboxImage({
  src,
  largeSrc,
  alt,
  width = 800,
  height = 600,
  className = '',
  style = {},
}) {
  const [open, setOpen] = useState(false)

  const defaultStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    cursor: 'pointer',
    ...style,
  }

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={defaultStyle}
        onClick={() => setOpen(true)}
        placeholder='blur'
        blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: largeSrc || src, alt }]}
        carousel={{ finite: true }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </>
  )
}
