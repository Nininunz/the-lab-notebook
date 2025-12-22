import React from 'react'

interface UpdateCardProps {
  date: string
  text: string
}

export const UpdateCard: React.FC<UpdateCardProps> = ({ date, text }) => {
  return (
    <div className='relative rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/5'>
      <div className='mb-1 text-xs font-medium text-slate-500 dark:text-slate-400'>{date}</div>
      <p className='text-sm text-slate-800 dark:text-slate-200'>{text}</p>
    </div>
  )
}
