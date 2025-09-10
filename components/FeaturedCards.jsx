'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'

export default function FeaturedCards({ featured }) {
  // Image component with fallback
  const ProjectImage = ({ src, alt, title }) => {
    const [imageError, setImageError] = useState(false)

    const handleImageError = useCallback(() => {
      setImageError(true)
    }, [])

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
        className='object-cover'
        onError={handleImageError}
      />
    )
  }

  return (
    <div>
      {/* Featured Projects */}
      <div className='mt-12 mb-3 flex items-center gap-3'>
        <h2 className='text-xl font-semibold tracking-tight text-slate-900 dark:text-white'>
          Featured Projects
        </h2>
        <div className='h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-white/10' />
      </div>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {featured.map(p => (
          <a
            key={p.title}
            href={p.href}
            className='group block overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5'
          >
            <div className='relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 dark:from-white/10 dark:to-white/5'>
              <ProjectImage src={p.image} title={p.title} />
            </div>
            <div className='p-5'>
              <div className='mb-2 text-sm font-semibold text-slate-900 dark:text-white'>
                {p.title}
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300'>
                {p.summary}
              </p>
              <div className='mt-3 flex flex-wrap gap-2'>
                {p.tags.map(t => (
                  <span
                    key={t}
                    className='rounded-full border border-slate-200/70 bg-white/60 px-2 py-0.5 text-xs text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
