import { enrichMetaWithDrafts } from '@lib/meta-utils.js'

const meta = {
  index: 'Overview',
  'create-placeholders': 'Create Placeholders',
  'verify-links': 'Verify Links',
  'verify-projects': 'Verify Projects',
  'verify-meta': 'Verify Meta',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
