import React from 'react'
import { ArrowUpRight, ChevronRight, X } from 'lucide-react'
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
  const isExternal = href?.startsWith('http://') || href?.startsWith('https://')
  const hasLink = !!href

  return (
    <a
      href={href}
      className='group flex items-center gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700
                 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all'
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
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

      {/* Icon/Text - morphs on hover */}
      {!hasLink ? (
        <div className='relative w-16 h-4 shrink-0 flex items-center justify-end overflow-hidden'>
          {/* Chevron (default state) */}
          <ChevronRight
            className='absolute right-0 w-4 h-4 text-gray-400
                       group-hover:opacity-0 group-hover:rotate-90
                       transition-all duration-300 ease-in-out'
          />
          {/* X icon (hover state) */}
          <X
            className='absolute right-0 w-4 h-4 text-gray-500
                       opacity-0 rotate-90 scale-50
                       group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100
                       transition-all duration-300 ease-in-out'
          />
        </div>
      ) : isExternal ? (
        <div className='relative w-16 h-4 shrink-0 flex items-center justify-end overflow-hidden'>
          {/* Chevron (default state) */}
          <ChevronRight
            className='absolute right-0 w-4 h-4 text-gray-400
                       group-hover:opacity-0 group-hover:translate-x-2
                       transition-all duration-300 ease-in-out'
          />
          {/* Arrow icon (hover state) */}
          <ArrowUpRight
            className='absolute right-0 w-4 h-4 text-purple-600
                       opacity-0 rotate-45 scale-50
                       group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100 group-hover:translate-x-0.5
                       transition-all duration-300 ease-in-out'
          />
        </div>
      ) : (
        <ChevronRight className='w-4 h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-blue-800 transition-all shrink-0' />
      )}
    </a>
  )
}
