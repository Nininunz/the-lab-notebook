import { enrichMetaWithDrafts } from '@/lib/meta-utils.js'

const meta = {
  index: 'ChatGPT Electron App',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
