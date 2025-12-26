import { enrichMetaWithDrafts } from '@/src/app/meta-utils.js'

const meta = {
  index: 'Overview',
  'meta-utils': 'Meta Utils',
  'project-directory': 'Project Directory Structure',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
