import React from 'react'

interface SectionTitleProps {
  title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className='mt-12 mb-3 flex items-center gap-3'>
      <h2 className='text-xl font-semibold tracking-tight text-slate-900 dark:text-white'>
        {title}
      </h2>
      <div className='h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-white/10' />
    </div>
  )
}

export default SectionTitle
