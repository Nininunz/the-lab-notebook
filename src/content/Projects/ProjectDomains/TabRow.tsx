import type { DomainTab } from './utils'

interface TabRowProps {
  domains: DomainTab[]
  activeTab: string
  onTabChange: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function TabRow({ domains, activeTab, onTabChange }: TabRowProps) {
  return (
    <div className='border-b border-gray-200 dark:border-gray-700 overflow-x-auto scrollbar-hide'>
      <nav className='flex space-x-8 min-w-max' aria-label='Domains'>
        {domains.map(domain => (
          <button
            key={domain.id}
            data-domain-id={domain.id}
            onClick={onTabChange}
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
  )
}
