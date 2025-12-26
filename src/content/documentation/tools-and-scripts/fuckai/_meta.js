import { enrichMetaWithDrafts } from '@/src/app/meta-utils.js'

const meta = {
  index: 'Overview',
  usage: 'Usage',
  configuration: 'Configuration',
  source: 'Source',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
