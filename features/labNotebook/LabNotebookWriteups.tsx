import React from 'react'
import ListLinks from '@/components/ListLinks'
import SectionTitle from '@/components/SectionTitle'

const LabNotebookWriteups: React.FC = () => {
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
  return (
    <div>
      <SectionTitle title='Recent Write-ups' />
      <ListLinks listLinks={writeups} />
    </div>
  )
}

export default LabNotebookWriteups

// Note: keep this list manually curated for now, as projects are not directly tied to project-directory entries
