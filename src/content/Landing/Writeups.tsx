import React from 'react'
import { ListLinks, SectionTitle } from './components'
import { WriteupEntryItems } from './data/writeup-entries'

// Note: keep this list manually curated for now, as projects are not directly tied to project-directory entries

const sortedWriteups = [...WriteupEntryItems].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export const Writeups: React.FC = () => {
  return (
    <SectionTitle title='Recent Write-ups'>
      <ListLinks listLinks={sortedWriteups} />
    </SectionTitle>
  )
}
