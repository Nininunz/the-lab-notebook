import {
  Sparkles,
  FileText,
  GitBranch,
  CalendarClock,
  Link,
} from 'lucide-react'
import QuickLinkCard from '@/components/QuickLinkCard'
import SectionTitle from '@/components/SectionTitle'

export default function LabNotebookQuickLinks() {
  return (
    <div>
      <SectionTitle title='Quick Links' />
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <QuickLinkCard label='All Projects' href='/projects' icon={Sparkles} />
        <QuickLinkCard label='Docs Index' href='/docs' icon={FileText} />
        <QuickLinkCard
          label='Portfolio'
          href='https://nininunz.dev'
          icon={GitBranch}
        />
        <QuickLinkCard
          label='Changelog'
          href='/changelog'
          icon={CalendarClock}
        />
        <QuickLinkCard label='Shortcuts' href='/shortcuts' icon={Link} />
      </div>
    </div>
  )
}
