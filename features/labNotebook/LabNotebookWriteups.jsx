import ListLinks from '@/components/ListLinks'

export default function LabNotebookWriteups() {
  const writeups = [
    {
      title: 'The Mysterious BMW N52 Engine Failure',
      date: '2025-09-06',
      href: '/project/mysterious-n52-carbon-valves',
    },
  ]
  return <ListLinks listLinks={writeups} />
}
