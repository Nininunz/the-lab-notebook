export type ProjectDomain =
  | 'Software'
  | 'Automotive'
  | 'Embedded'
  | 'Electronics'
  | 'Mechanical'

export type ProjectStatus =
  | 'completed'
  | 'active'
  | 'planning'
  | 'archived'
  | 'paused'
  | 'idea'

export interface Feature {
  title: string
  summary: string
  tags: string[]
  image: string
  href: string
}

export interface Project {
  id: number
  name: string
  altNames?: string[]
  href: string
  domains: ProjectDomain[]
  status?: ProjectStatus
  feature?: Feature[]
  completedDate?: string
}

export declare const projects: Project[]
