import React from 'react'
import { FocusCardProps } from './focus-card'
import { colorSchemes } from './color-schemes'

export const FocusCard: React.FC<FocusCardProps> = ({
  title,
  timeline,
  progress,
  description,
  nextMilestones,
  href,
  status = 'active',
  completedDate,
  color = 'blue',
  action = 'View Progress',
  disabled = false,
}) => {
  // Color mappings for different project statuses/types

  const colors = colorSchemes[color] || colorSchemes.blue
  const statusLabel =
    status === 'completed' ? 'Completed' : status === 'planning' ? 'Planning' : 'Active'
  const shouldAnimate = status === 'active' || status === 'planning'

  return (
    <div
      className={`group relative rounded-2xl border ${colors.border} bg-linear-to-br ${colors.bg} p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md`}
    >
      {/* Header with status badge and progress/date */}
      <div className='mb-3 flex items-center justify-between'>
        <div
          className={`inline-flex items-center gap-2 rounded-full ${colors.badge} px-3 py-1 text-sm font-medium`}
        >
          <div
            className={`h-2 w-2 rounded-full ${colors.dot} ${shouldAnimate ? 'animate-pulse' : ''}`}
          />
          {statusLabel}
        </div>
        {progress && <div className={`text-sm ${colors.text}`}>{progress}%</div>}
        {completedDate && <div className={`text-xs ${colors.text}`}>{completedDate}</div>}
      </div>

      {/* Project title */}
      <h3 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>{title}</h3>

      {/* Description */}
      <p className='mb-4 text-sm text-gray-600 dark:text-gray-300'>{description}</p>

      {/* Progress bar for active projects */}
      {progress && status !== 'completed' && (
        <div className='mb-4'>
          <div className='mb-2 flex items-center justify-between text-xs text-gray-500'>
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className='h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700'>
            <div
              className={`h-2 rounded-full ${colors.progress}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Project details */}
      {(timeline || nextMilestones) && (
        <div className='space-y-2 text-sm mb-4'>
          {timeline && (
            <div>
              <span className='font-medium text-gray-700 dark:text-gray-300'>Timeline:</span>
              <span className='ml-2 text-gray-600 dark:text-gray-400'>{timeline}</span>
            </div>
          )}
          {nextMilestones && (
            <div>
              <span className={`font-semibold ${colors.next}`}>Next:</span>
              <span className='ml-2 text-gray-600 dark:text-gray-400'>{nextMilestones}</span>
            </div>
          )}
        </div>
      )}

      {/* Action link */}
      {href && !disabled && (
        <a
          href={href}
          className={`inline-flex items-center gap-1 text-sm font-medium ${colors.link}`}
        >
          {action}
          <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </a>
      )}
      {href && disabled && (
        <span className='inline-flex items-center gap-1 text-sm font-medium text-gray-400 cursor-not-allowed'>
          {status === 'completed' ? 'Case Study' : 'View Progress'}
          <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </span>
      )}
    </div>
  )
}
