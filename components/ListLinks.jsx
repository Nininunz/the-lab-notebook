import { FileText, CalendarClock } from 'lucide-react'

export default function ListLinks({ listLinks }) {
  return (
    <div>
      <ul className='divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white/70 dark:divide-white/10 dark:border-white/10 dark:bg-white/5'>
        {listLinks.map(w => (
          <li
            key={w.title}
            className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 p-4'
          >
            <div className='flex items-center gap-3'>
              <FileText className='h-4 w-4 text-slate-400' />
              <a
                href={w.href}
                className='font-medium text-slate-900 hover:underline dark:text-white'
              >
                {w.title}
              </a>
            </div>
            <div className='flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 sm:flex-shrink-0'>
              <CalendarClock className='h-4 w-4' />
              <time>{w.date}</time>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
