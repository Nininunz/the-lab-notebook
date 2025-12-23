import React from 'react'
import { SectionTitle, UpdateCard } from './components'
import { UpdateEntryItems } from './data/update-entries'

const sortedUpdates = [...UpdateEntryItems].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export const Updates: React.FC = () => {
  return (
    <SectionTitle title='Updates'>
      <ol className='space-y-2'>
        {sortedUpdates.map(u => (
          <li key={`${u.date}-${u.text}`}>
            <UpdateCard date={u.date} text={u.text} />
          </li>
        ))}
      </ol>
    </SectionTitle>
  )
}
