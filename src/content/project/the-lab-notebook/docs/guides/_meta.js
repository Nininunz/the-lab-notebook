import { enrichMetaWithDrafts } from '@/lib/meta-utils.js'

const meta = {
  index: 'Overview',
  'getting-started': 'Getting Started',
  development: 'Development Guide',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
