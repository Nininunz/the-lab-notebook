export interface ProjectEntry {
  item: string
  short: string
  slug: string
  status: ProjectStatus
  domains: ProjectDomain[]
}

export type ProjectDomain = 'Software' | 'Automotive' | 'Embedded' | 'Electronics' | 'Mechanical'

export type ProjectStatus =
  | 'completed'
  | 'maintenance'
  | 'active'
  | 'planning'
  | 'archived'
  | 'paused'
  | 'idea'

export const ProjectEntries: ProjectEntry[] = [
  {
    item: 'ChatGPT for Intel Macs',
    short: 'A lightweight Electron wrapper for ChatGPT',
    slug: '/gpt-electron',
    status: 'active',
    domains: ['Software'],
  },
  {
    item: 'SmartHub Integration',
    short: 'Integrating SmartHub with Home Assistant for enhanced automation',
    slug: '/home-assistant-smarthub-integration',
    status: 'active',
    domains: ['Software'],
  },
]
