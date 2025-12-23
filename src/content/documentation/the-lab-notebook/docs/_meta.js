import { enrichMetaWithDrafts } from '@lib/meta-utils.js'

const meta = {
  guides: 'Guides',
  components: 'Components',
  scripts: 'Scripts',
  utilities: 'Utilities',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
