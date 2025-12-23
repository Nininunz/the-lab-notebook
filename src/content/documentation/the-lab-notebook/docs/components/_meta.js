import { enrichMetaWithDrafts } from '@lib/meta-utils.js'

const meta = {
  index: 'Overview',
  'project-card-small': 'Small Project Card',
  'project-card-large': 'Large Project Card',
  'section-title': 'Section Title',
  'quick-link-card': 'Quick Link Card',
  'photo-grid': 'Photo Grid',
  'list-links': 'List Links',
  'lightbox-image': 'Lightbox Image',
  'landing-header': 'Landing Header',
  'info-card': 'Info Card',
  'feature-card': 'Feature Card',
  'update-card': 'Update Card',
  'project-domain-tabs': 'Project Domain Tabs',
  'status-link': 'Status Link',
  analytics: 'Analytics',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
