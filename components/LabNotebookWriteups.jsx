import { FileText, CalendarClock } from 'lucide-react'

export default function LabNotebookWriteups() {
  const writeups = [
    {
      title: 'N55 Intake Valve Carbon Study',
      date: '2025‑08‑02',
      href: '#/notes/n55-valve-study',
    },
    {
      title: 'ESP32 BLE Beacons for HomeKit',
      date: '2025‑07‑18',
      href: '#/notes/esp32-ble-homekit',
    },
    {
      title: 'LKQ Scraper Rebuild (Python→Node)',
      date: '2025‑05‑19',
      href: '#/notes/lkq-node-rewrite',
    },
    {
      title: 'BMW VO/SA Parser Explained',
      date: '2025‑03‑23',
      href: '#/notes/bmw-vo-parser',
    },
  ]

  return (
    <div>
      {/* Recent Writeups */}
      <div className='mt-12 mb-3 flex items-center gap-3'>
        <h2 className='text-xl font-semibold tracking-tight text-slate-900 dark:text-white'>
          Recent Writeups
        </h2>
        <div className='h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-white/10' />
      </div>
      <ul className='divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white/70 dark:divide-white/10 dark:border-white/10 dark:bg-white/5'>
        {writeups.map(w => (
          <li
            key={w.title}
            className='flex items-center justify-between gap-4 p-4'
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
            <div className='flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400'>
              <CalendarClock className='h-4 w-4' />
              <time>{w.date}</time>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
