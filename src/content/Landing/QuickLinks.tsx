import React from 'react'
import { Sparkles, GitBranch, CalendarClock, Link, Contact } from 'lucide-react'
import { SectionTitle, QuickLinkCard } from './components'

const LINKS = [
  { label: 'Projects', href: '/projects', icon: Sparkles },
  // { label: 'Docs Index', href: '/docs', icon: FileText },
  { label: 'Portfolio', href: 'https://nininunz.dev', icon: Contact },
  { label: 'Github', href: 'https://github.com/nininunz', icon: GitBranch },
  { label: 'Changelog', href: '/changelog', icon: CalendarClock },
  { label: 'Shortcuts', href: '/shortcuts', icon: Link },
] as const

export const QuickLinks: React.FC = () => {
  return (
    <SectionTitle title='Quick Links'>
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
        {LINKS.map(({ label, href, icon }) => (
          <QuickLinkCard key={href} label={label} href={href} icon={icon} />
        ))}
      </div>
    </SectionTitle>
  )
}
