import { enrichMetaWithDrafts } from '@lib/meta-utils.js'

const meta = {
  index: { title: 'Home', theme: { breadcrumb: false } },
  projects: { title: 'Projects & Write-ups' },
  shortcuts: { title: 'Shortcuts & Quick Links' },
  documentation: { title: 'Technical Documentation' },
  // docs: { title: 'Technical Documentation' },
  // playground: { title: 'Playground', display: 'hidden' },
  // project: { title: 'Project Directory' },
  changelog: { title: 'Changelog' },
}

export default enrichMetaWithDrafts(meta, import.meta.url)
