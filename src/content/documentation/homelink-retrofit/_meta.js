import { enrichMetaWithDrafts } from '@/src/app/meta-utils.js'

const meta = {
  index: 'Introduction',
  'choosing-the-right-mirror': 'Choosing the Right Mirror',
  'mirror-removal-and-installation': 'Mirror Removal and Installation',
  'wiring-the-new-harness': 'Wiring The New Harness',
  conclusion: 'Conclusion',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
