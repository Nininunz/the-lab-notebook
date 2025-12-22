import React from 'react'
import SectionTitle from '@/components/SectionTitle'
import UpdateCard from '@/components/UpdateCard'

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

// Sort by date descending
const sortedUpdates = updates.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

const LabNotebookUpdates: React.FC = () => {
  return (
    <>
      <SectionTitle title='Updates' />
      <ol className='space-y-2'>
        {sortedUpdates.map(u => (
          <li key={u.date}>
            <UpdateCard date={u.date} text={u.text} />
          </li>
        ))}
      </ol>
    </>
  )
}

export default LabNotebookUpdates
