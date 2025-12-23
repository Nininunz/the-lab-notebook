// Project types
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

// Domain tab type
export interface DomainTab {
  id: string
  name: ProjectDomain | 'All'
  projects: ProjectEntry[]
  description?: string
}

// StatusLink component props
export interface StatusLinkProps {
  name: string
  href: string
  status: string
  short?: string
}
