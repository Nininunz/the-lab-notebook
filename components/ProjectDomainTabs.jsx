'use client'

import { useState, useCallback } from 'react'
import ProjectListCard from '@/components/ProjectListCard'
import { projects } from '@/lib/project-directory.js'

export default function ProjectDomainTabs() {
  // Hardcoded domain list
  const hardcodedDomains = [
    { id: 'software', name: 'Software' },
    { id: 'automotive', name: 'Automotive' },
    { id: 'embedded', name: 'Embedded' },
    { id: 'electronics', name: 'Electronics' },
  ]

  // Map projects to hardcoded domains
  const domainList = hardcodedDomains.map(domain => ({
    ...domain,
    projects: projects.filter(project =>
      project.domains.map(d => d.toLowerCase()).includes(domain.id)
    ),
  }))

  const [activeTab, setActiveTab] = useState(domainList[0]?.id || '')
  const activeDomain = domainList.find(domain => domain.id === activeTab)

  return (
    <div className='mt-8'>
      {/* Tab buttons */}
      <div className='border-b border-gray-200 dark:border-gray-700 overflow-x-auto'>
        <nav className='flex space-x-8 min-w-max' aria-label='Domains'>
          {domainList.map(domain => (
            <button
              key={domain.id}
              onClick={() => setActiveTab(domain.id)}
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

      {/* Tab content */}
      <div className='mt-6'>
        <div className='text-gray-600 dark:text-gray-300 mb-4'>
          {activeDomain?.description}
        </div>

        {/* Project list */}
        <div className='grid gap-3'>
          {activeDomain?.projects.map(project => (
            <ProjectListCard
              key={project.name}
              name={project.name}
              href={project.href}
              status={project.status}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
