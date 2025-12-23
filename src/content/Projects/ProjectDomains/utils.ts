import type { ProjectDomain, ProjectEntry } from './project-record'

export interface DomainTab {
  id: string
  name: ProjectDomain | 'All'
  projects: ProjectEntry[]
}

export function computeDomainTabs(projects: ProjectEntry[]): DomainTab[] {
  const uniqueDomains: ProjectDomain[] = Array.from(
    new Set(projects.flatMap(p => p.domains))
  ).sort()

  return [
    {
      id: 'all',
      name: 'All',
      projects,
    },
    ...uniqueDomains.map(domain => ({
      id: domain.toLowerCase(),
      name: domain,
      projects: projects.filter(p => p.domains.includes(domain)),
    })),
  ]
}
