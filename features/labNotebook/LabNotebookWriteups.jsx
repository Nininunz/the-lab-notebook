import ListLinks from '@/components/ListLinks'

export default function LabNotebookWriteups() {
  const writeups = [
    {
      title: 'The Mysterious BMW N52 Engine Failure',
      date: '2025-09-06',
      href: '/miscellaneous/mysterious-n52-carbon-valves',
    },
  ]
  return <ListLinks listLinks={writeups} />
}
