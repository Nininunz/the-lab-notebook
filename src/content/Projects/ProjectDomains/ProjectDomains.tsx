'use client'

import { useState, useCallback, useEffect } from 'react'
import { ProjectDirectory } from './project-directory'
import type { ProjectDomain, ProjectEntry } from './project-record'
import { StatusLink } from './StatusLink'

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
      {/* Tabs */}
      <div className='border-b border-gray-200 dark:border-gray-700 overflow-x-auto scrollbar-hide'>
        <nav className='flex space-x-8 min-w-max' aria-label='Domains'>
          {domainList.map(domain => (
            <button
              key={domain.id}
              data-domain-id={domain.id}
              onClick={handleTabChange}
              className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors cursor-pointer ${
                activeTab === domain.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {domain.name}
              <span className='ml-2 text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full'>
                {domain.projects.length}
              </span>
            </button>
          ))}
        </nav>
      </div>

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
