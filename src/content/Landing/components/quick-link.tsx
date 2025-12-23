import { ArrowRight } from 'lucide-react'
import React from 'react'

export interface QuickLinkCardProps {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export const QuickLinkCard: React.FC<QuickLinkCardProps> = ({ label, href, icon: Icon }) => {
  return (
    <a
      href={href}
      className='group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white/70 px-3 py-3 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5'
    >
      <span className='inline-flex items-center gap-2 text-slate-700 dark:text-slate-200'>
        <Icon className='h-4 w-4' />
        {label}
      </span>
      <ArrowRight className='h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition' />
    </a>
  )
}
