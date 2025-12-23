'use client'

import { useState, useCallback } from 'react'
import type { DomainTab } from './types'
import { StatusLink } from './status-link'
import { TabRow } from './tab-row'

interface ProjectDomainsClientProps {
  domainList: DomainTab[]
}

export function ProjectDomainsClient({ domainList }: ProjectDomainsClientProps) {
  const [activeTab, setActiveTab] = useState<string>(domainList[0]?.id ?? '')
  const activeDomain = domainList.find(domain => domain.id === activeTab)

  const handleTabChange = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveTab(event.currentTarget.dataset.domainId ?? '')
  }, [])

  return (
    <div className='mt-8'>
      <TabRow domains={domainList} activeTab={activeTab} onTabChange={handleTabChange} />

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
