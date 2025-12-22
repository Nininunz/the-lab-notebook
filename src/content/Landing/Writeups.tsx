import React from 'react'
import { ListLinks, SectionTitle } from './components'

// Note: keep this list manually curated for now, as projects are not directly tied to project-directory entries

const writeups = [
  {
    title: 'The Mysterious BMW N52 Engine Failure',
    date: '2025-09-06',
    href: '/project/mysterious-n52-carbon-valves',
  },
  {
    title: 'BMW Electrochromic Mirror Retrofit',
    date: '2025-09-04',
    href: '/project/homelink-retrofit',
  },
]

const sortedWriteups = [...writeups].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export const Writeups: React.FC = () => {
  return (
    <SectionTitle title='Recent Write-ups'>
      <ListLinks listLinks={sortedWriteups} />
    </SectionTitle>
  )
}
