import {
  Sparkles,
  FileText,
  GitBranch,
  CalendarClock,
  Link,
  ArrowRight,
} from 'lucide-react'

export default function LabNotebookQuickLinks() {
  const quickLinks = [
    { label: 'All Projects', href: '/projects', icon: Sparkles },
    { label: 'Docs Index', href: '/docs', icon: FileText },
    { label: 'Portfolio', href: 'https://nininunz.dev', icon: GitBranch },
    { label: 'Changelog', href: '/changelog', icon: CalendarClock },
    { label: 'Shortcuts', href: '/shortcuts', icon: Link },
  ]

  return (
    <div>
      {/* Quick Links */}
      <div className='mt-12 mb-3 flex items-center gap-3'>
        <h2 className='text-xl font-semibold tracking-tight text-slate-900 dark:text-white'>
          Quick Links
        </h2>
        <div className='h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-white/10' />
      </div>
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-5'>
        {quickLinks.map(q => (
          <a
            key={q.label}
            href={q.href}
            className='group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white/70 px-3 py-3 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5'
          >
            <span className='inline-flex items-center gap-2 text-slate-700 dark:text-slate-200'>
              <q.icon className='h-4 w-4' />
              {q.label}
            </span>
            <ArrowRight className='h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition' />
          </a>
        ))}
      </div>
    </div>
  )
}
