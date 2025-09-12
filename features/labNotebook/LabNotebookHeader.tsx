import React from 'react'
import LandingHeader from '@/components/LandingHeader'

const LabNotebookHeader: React.FC = () => {
  return (
    <LandingHeader
      mainTitle='The Lab'
      subTitle='Notebook'
      mainDesc='A curated portfolio of engineering writeups and project documentation spanning software, electronics, and mechanical systems.'
      subDesc='A small window into my work — the rest remains confidential or not publicly documented.'
    />
  )
}

export default LabNotebookHeader
