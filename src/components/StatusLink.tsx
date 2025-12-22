import React from 'react'

interface StatusLinkProps {
  name: string
  href: string
  status: string
}

const StatusLink: React.FC<StatusLinkProps> = ({ name, href, status }) => {
  return (
    <a
      href={href}
      className='group flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all'
    >
      <div className='flex items-center gap-3'>
        <div
          className={`w-2 h-2 rounded-full ${
            status === 'completed'
              ? 'bg-green-500'
              : status === 'active' || status === 'ongoing'
                ? 'bg-blue-500 animate-pulse'
                : status === 'planning'
                  ? 'bg-yellow-500'
                  : 'bg-gray-400'
          }`}
        />
        <span className='text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
          {name}
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
  )
}

export default StatusLink
