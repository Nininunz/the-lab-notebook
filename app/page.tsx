// page.tsx or index.tsx

import Head from 'next/head'
import LabNotebookHeader from '@/features/labNotebook/LabNotebookHeader'
import LabNotebookDomains from '@/features/labNotebook/LabNotebookDomains'
import LabNotebookFeatured from '@/features/labNotebook/LabNotebookFeatured'
import LabNotebookWriteups from '@/features/labNotebook/LabNotebookWriteups'
import LabNotebookQuickLinks from '@/features/labNotebook/LabNotebookQuickLinks'
import LabNotebookUpdates from '@/features/labNotebook/LabNotebookUpdates'

export default function HomePage() {
  return (
    <div className='mx-auto max-w-6xl'>
      <Head>
        <title>Home</title>
      </Head>
      <div className='px-5 md:px-10 xl:px-0 mt-5 mb-15'>
        <LabNotebookHeader />
        <LabNotebookDomains />
        <LabNotebookFeatured />
        <LabNotebookWriteups />
        <LabNotebookQuickLinks />
        <LabNotebookUpdates />
      </div>
    </div>
  )
}
