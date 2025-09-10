'use client'

import { useState, useCallback } from 'react'

const domains = [
  {
    id: 'automotive',
    name: 'Automotive',
    count: 8,
    description:
      'Focus on BMW E-series retrofits, diagnostic tools, and engine analysis',
    projects: [
      {
        name: 'CAS3 Retrofit & Comfort Access',
        href: '/projects/e83-cas3-retrofit',
        status: 'completed',
      },
      {
        name: 'HomeLink Retrofit Guide',
        href: '/docs-guides/homelink-retrofit',
        status: 'completed',
      },
      {
        name: 'N52 Engine Analysis',
        href: '/docs-guides/e83-n52-rebuild',
        status: 'completed',
      },
      { name: 'BMW Diagnostic Tools', href: '/future', status: 'active' },
      { name: 'E46 M3 Restoration', href: '/future', status: 'archived' },
      {
        name: 'CAN Bus Protocol Analysis',
        href: '/future',
        status: 'completed',
      },
      { name: 'Custom ECU Programming', href: '/future', status: 'planning' },
      {
        name: 'VANOS System Repair Guide',
        href: '/future',
        status: 'completed',
      },
    ],
  },
  {
    id: 'electronics',
    name: 'Electronics',
    count: 6,
    description: 'Embedded systems, PCB design, and sensor integration',
    projects: [
      { name: 'Smart Grid Monitor', href: '/future', status: 'completed' },
      {
        name: 'ESP32 Development Platform',
        href: '/future',
        status: 'completed',
      },
      {
        name: 'Energy Dashboard Integration',
        href: '/future',
        status: 'completed',
      },
      { name: 'PCB Design Templates', href: '/future', status: 'active' },
      { name: 'Sensor Calibration Tools', href: '/future', status: 'planning' },
      { name: 'HomeKit Integration Hub', href: '/future', status: 'archived' },
    ],
  },
  {
    id: 'software',
    name: 'Software',
    count: 12,
    description: 'Web applications, data processing, and API development',
    projects: [
      {
        name: 'Junkyard Intelligence Platform',
        href: '/future',
        status: 'active',
      },
      {
        name: 'Salvage-Yard Inventory System',
        href: '/future',
        status: 'ongoing',
      },
      { name: 'The Lab Notebook', href: '/changelog', status: 'active' },
      {
        name: 'SmartHub Data Export Utility',
        href: '/future',
        status: 'completed',
      },
      {
        name: 'ChatGPT macOS App Bundle',
        href: '/future',
        status: 'completed',
      },
      {
        name: 'API Gateway Architecture',
        href: '/future',
        status: 'completed',
      },
      { name: 'Data Pipeline Automation', href: '/future', status: 'active' },
      { name: 'Legacy System Migrations', href: '/future', status: 'archived' },
      { name: 'Web Scraping Framework', href: '/future', status: 'completed' },
      {
        name: 'Database Optimization Tools',
        href: '/future',
        status: 'planning',
      },
      { name: 'Authentication Service', href: '/future', status: 'completed' },
      { name: 'Monitoring Dashboard', href: '/future', status: 'active' },
    ],
  },
  {
    id: 'mechanical',
    name: 'Mechanical',
    count: 4,
    description: 'CAD design, 3D printing, and fabrication work',
    projects: [
      {
        name: 'CoreXY FDM Printer Platform',
        href: '/future',
        status: 'completed',
      },
      { name: 'Custom Tooling Design', href: '/future', status: 'active' },
      { name: 'Fixture Design Library', href: '/future', status: 'planning' },
      {
        name: 'Rapid Prototyping Workflow',
        href: '/future',
        status: 'completed',
      },
    ],
  },
]

export default function ProjectDomainTabs() {
  const [activeTab, setActiveTab] = useState('automotive')

  const activeDomain = domains.find(domain => domain.id === activeTab)

  const handlers = {
    automotive: useCallback(() => setActiveTab('automotive'), []),
    electronics: useCallback(() => setActiveTab('electronics'), []),
    software: useCallback(() => setActiveTab('software'), []),
    mechanical: useCallback(() => setActiveTab('mechanical'), []),
  }

  return (
    <div className='mt-8'>
      {/* Tab buttons */}
      <div className='border-b border-gray-200 dark:border-gray-700 overflow-x-auto'>
        <nav className='flex space-x-8 min-w-max' aria-label='Domains'>
          {domains.map(domain => (
            <button
              key={domain.id}
              onClick={handlers[domain.id]}
              className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors cursor-pointer ${
                activeTab === domain.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {domain.name}
              <span className='ml-2 text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full'>
                {domain.count}
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
            <a
              key={project.name}
              href={project.href}
              className='group flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all'
            >
              <div className='flex items-center gap-3'>
                <div
                  className={`w-2 h-2 rounded-full ${
                    project.status === 'completed'
                      ? 'bg-green-500'
                      : project.status === 'active' ||
                          project.status === 'ongoing'
                        ? 'bg-blue-500 animate-pulse'
                        : project.status === 'planning'
                          ? 'bg-yellow-500'
                          : 'bg-gray-400'
                  }`}
                />
                <span className='text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                  {project.name}
                </span>
              </div>
              <svg
                className='w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
