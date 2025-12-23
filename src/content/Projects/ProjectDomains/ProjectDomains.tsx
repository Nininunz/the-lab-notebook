'use client'

import { useState, useCallback, useEffect } from 'react'
import { ProjectDirectory } from './project-directory'
import type { ProjectDomain, ProjectEntry } from './project-record'
import { StatusLink } from './StatusLink'
import { TabRow } from './TabRow'

interface DomainTab {
  id: string
  name: ProjectDomain | 'All'
  projects: ProjectEntry[]
  description?: string
}

export function ProjectDomains() {
  // Collect unique domains
  const uniqueDomains: ProjectDomain[] = Array.from(
    new Set(ProjectDirectory.flatMap(project => project.domains))
  )

  const domainList: DomainTab[] = [
    {
      id: 'all',
      name: 'All',
      projects: ProjectDirectory,
    },
    ...uniqueDomains.map(domain => ({
      id: domain.toLowerCase(),
      name: domain,
      projects: ProjectDirectory.filter(project => project.domains.includes(domain)),
    })),
  ]

  const [activeTab, setActiveTab] = useState<string>(domainList[0]?.id ?? '')
  const activeDomain = domainList.find(domain => domain.id === activeTab)

  const handleTabChange = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveTab(event.currentTarget.dataset.domainId ?? '')
  }, [])

  return (
    <div className='mt-8'>
      <TabRow domains={domainList} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Content */}
      <div className='mt-6'>
        {activeDomain?.description && (
          <div className='text-gray-600 dark:text-gray-300 mb-4'>{activeDomain.description}</div>
        )}

        <div className='grid gap-3'>
          {activeDomain?.projects.map(project => (
            <StatusLink
              key={project.slug}
              name={project.item}
              href={project.slug}
              status={project.status}
              short={project.short}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
