import React from 'react'
import { StatusLinkProps } from './status-link'

export const StatusLink: React.FC<StatusLinkProps> = ({ name, href, status, short }) => {
  return (
    <a
      href={href}
      className='group flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all gap-2'
    >
      <div className='flex items-center'>
        <div style={{ marginInline: '0.250rem' }}>
          <div
            className={`rounded-full ${
              status === 'completed'
                ? 'bg-green-500'
                : status === 'active' || status === 'ongoing'
                  ? 'bg-blue-500 animate-pulse'
                  : status === 'planning'
                    ? 'bg-yellow-500'
                    : 'bg-gray-400'
            }`}
            style={{ width: '12px', height: '12px', flexShrink: 0 }}
          />
        </div>

        <div className='flex items-center ml-2 leading-none'>
          <div className='text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
            {name}
            {short && <div className='text-xs text-gray-500 dark:text-gray-400'>{short}</div>}
          </div>
        </div>
      </div>

      <div>
        <svg
          className='w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
        </svg>
      </div>
    </a>
  )
}
