'use client'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import React, { useState } from 'react'
import Image from 'next/image'

/**
 * Usage:
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
  width = 1000,
  height = 10000,
}) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ maxWidth: '100%', borderRadius: '8px', cursor: 'pointer' }}
        onClick={() => setOpen(true)}
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: largeSrc || src, alt }]}
        carousel={{ finite: true }}
      />
    </>
  )
}
