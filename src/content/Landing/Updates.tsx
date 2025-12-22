import React from 'react'
import { SectionTitle, UpdateCard } from './components'

const updates = [
  {
    date: '2025-09-11',
    text: 'Published v1.1.0 — first source release of The Lab Notebook.',
  },
  {
    date: '2025-09-06',
    text: 'Completed N52 engine teardown and cylinder head inspection analysis.',
  },
]

const sortedUpdates = [...updates].sort(
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
