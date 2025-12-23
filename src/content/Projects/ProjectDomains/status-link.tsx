import React from 'react'
import type { StatusLinkProps } from './types'

const getDotStyle = (status: string): React.CSSProperties => {
  let backgroundColor = '#9ca3af' // gray-400
  let animation: React.CSSProperties['animation']

  if (status === 'completed') backgroundColor = '#22c55e' // green-500
  if (status === 'planning') backgroundColor = '#eab308' // yellow-500
  if (status === 'active' || status === 'ongoing') {
    backgroundColor = '#3b82f6' // blue-500
    animation = 'status-pulse 1.5s ease-in-out infinite'
  }

  return {
    width: 10,
    height: 10,
    borderRadius: '9999px',
    backgroundColor,
    flexShrink: 0,
    display: 'inline-block',
    animation,
  }
}

export function StatusLink({ name, href, status, short }: StatusLinkProps) {
  return (
    <a
      href={href}
      className='group flex items-center gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700
                 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all'
    >
      {/* Status dot */}
      <span
        style={{
          width: 16, // buffer from left edge
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <span style={getDotStyle(status)} />
      </span>

      {/* Title + short */}
      <div className='flex-1 min-w-0'>
        <div
          className='text-sm font-medium text-gray-900 dark:text-gray-100
                        group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'
        >
          {name}
        </div>
        {short && <div className='text-xs text-gray-500 dark:text-gray-400 truncate'>{short}</div>}
      </div>

      {/* Chevron */}
      <svg
        className='w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors shrink-0'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
      </svg>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes status-pulse {
            0% { opacity: 1; }
            50% { opacity: 0.4; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </a>
  )
}
