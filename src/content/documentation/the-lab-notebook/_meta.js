import { enrichMetaWithDrafts } from '@/src/app/meta-utils.js'

const meta = {
  index: 'Introduction to The Lab Notebook',
  'documentation-index': 'Documentation Index',
  docs: 'Documents',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
