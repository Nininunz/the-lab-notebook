'use client'

import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

interface FeatureCardProps {
  title: string
  summary: string
  tags: string[]
  href: string
  image?: string
}

interface ProjectImageProps {
  src?: string
  alt?: string
  title: string
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, title }) => {
  const [imageError, setImageError] = useState(false)
  const handleImageError = useCallback(() => setImageError(true), [])

  if (imageError || !src) {
    return (
      <div className='absolute inset-0 grid place-items-center text-slate-400 dark:text-slate-500'>
        <Sparkles className='h-8 w-8' />
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt || title}
      fill
      sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
      className='object-cover'
      onError={handleImageError}
    />
  )
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  summary,
  tags,
  href,
  image,
}) => {
  const isExternal = href.startsWith('http')

  const Wrapper = isExternal ? 'a' : Link

  return (
    <Wrapper
      {...(isExternal
        ? { href, target: '_blank', rel: 'noopener noreferrer' }
        : { href })}
      className='group block overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5'
    >
      <div className='relative aspect-video w-full overflow-hidden bg-linear-to-br from-slate-100 to-slate-50 dark:from-white/10 dark:to-white/5'>
        <ProjectImage src={image} title={title} />
      </div>

      <div className='p-5'>
        <h3 className='mb-2 text-sm font-semibold text-slate-900 dark:text-white'>
          {title}
        </h3>
        <p className='text-sm text-slate-700 dark:text-slate-300'>{summary}</p>

        <div className='mt-3 flex flex-wrap gap-2'>
          {tags.map(t => (
            <span
              key={`${title}-${t}`}
              className='rounded-full border border-slate-200/70 bg-white/60 px-2 py-0.5 text-xs text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300'
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
