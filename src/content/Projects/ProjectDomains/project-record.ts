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
