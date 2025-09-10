import {
  Sparkles,
  FileText,
  GitBranch,
  CalendarClock,
  Link,
} from 'lucide-react'
import QuickLinks from '@/components/QuickLinks'

export default function LabNotebookQuickLinks() {
  return (
    <QuickLinks
      quickLinksTitle={'Quick Links'}
      quickLinks={[
        { label: 'All Projects', href: '/projects', icon: Sparkles },
        { label: 'Docs Index', href: '/docs', icon: FileText },
        { label: 'Portfolio', href: 'https://nininunz.dev', icon: GitBranch },
        { label: 'Changelog', href: '/changelog', icon: CalendarClock },
        { label: 'Shortcuts', href: '/shortcuts', icon: Link },
      ]}
    />
  )
}
