import React from 'react'

export interface SectionTitleProps {
  title: string
  children?: React.ReactNode
}

// Wrapper component: renders a section title and any nested children below it.
export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  children,
}) => {
  return (
    <section className='mt-12 mb-3'>
      <div className='flex items-center gap-3'>
        <h2 className='text-xl font-semibold tracking-tight text-slate-900 dark:text-white'>
          {title}
        </h2>
        <div className='h-px flex-1 bg-linear-to-r from-slate-200 to-transparent dark:from-white/10' />
      </div>

      {children ? <div className='mt-4'>{children}</div> : null}
    </section>
  )
}
