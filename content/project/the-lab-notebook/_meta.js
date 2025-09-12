import { enrichMetaWithDrafts } from '@/lib/meta-utils.js'

const meta = {
  index: 'Introduction to The Lab Notebook',
  'documentation-index': 'Documentation Index',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
