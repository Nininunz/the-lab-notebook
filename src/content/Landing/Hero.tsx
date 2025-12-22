import React from 'react'

interface HeroProps {
  mainTitle: string
  subTitle: string
  mainDesc: string
  subDesc: string
}

export const Hero: React.FC<HeroProps> = ({
  mainTitle = 'The Lab',
  subTitle = 'Notebook',
  mainDesc = 'A curated portfolio of engineering writeups and project documentation spanning software, electronics, and mechanical systems.',
  subDesc = 'A small window into my work — the rest remains confidential or not publicly documented.',
}) => {
  return (
    <div className='w-full'>
      <div className='mx-auto max-w-6xl mt-7'>
        <div className='relative'>
          {/* Background grid pattern */}
          <div className='absolute inset-0 -bottom-17.5 bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-size-[24px_24px] bg-center opacity-30 mask-[linear-gradient(to_bottom,transparent_0%,black_16%,black_80%,transparent_100%),linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] mask-intersect' />

          <div className='relative'>
            {/* Header badge */}
            <div className='mb-6 inline-flex items-center gap-2' />

            {/* Main title */}
            <h1 className='mb-4 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white'>
              {mainTitle}
              <br />
              <span className='text-slate-600 dark:text-slate-400'>
                {subTitle}
              </span>
            </h1>

            {/* Description */}
            <div className='max-w-2xl space-y-3'>
              <p className='text-xl text-slate-600 dark:text-slate-300'>
                {mainDesc}
              </p>
              <p className='text-base text-slate-500 dark:text-slate-400'>
                {subDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
