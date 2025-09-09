export default function ProjectCard({
  title,
  timeline,
  progress,
  description,
  nextMilestones,
  href,
  status = 'active',
  domain,
  completedDate,
  color = 'blue',
}) {
  // Color mappings for different project statuses/types
  const colorSchemes = {
    blue: {
      border: 'border-blue-200 dark:border-blue-800/50',
      bg: 'from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20',
      badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200',
      dot: 'bg-blue-500',
      progress: 'bg-blue-500',
      text: 'text-blue-600 dark:text-blue-400',
      link: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
    },
    green: {
      border: 'border-green-200 dark:border-green-800/50',
      bg: 'from-green-50 to-green-100/50 dark:from-green-950/30 dark:to-green-900/20',
      badge:
        'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200',
      dot: 'bg-green-500',
      progress: 'bg-green-500',
      text: 'text-green-600 dark:text-green-400',
      link: 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300',
    },
    purple: {
      border: 'border-purple-200 dark:border-purple-800/50',
      bg: 'from-purple-50 to-purple-100/50 dark:from-purple-950/30 dark:to-purple-900/20',
      badge:
        'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200',
      dot: 'bg-purple-500',
      progress: 'bg-purple-500',
      text: 'text-purple-600 dark:text-purple-400',
      link: 'text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300',
    },
    emerald: {
      border: 'border-emerald-200 dark:border-emerald-800/50',
      bg: 'from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20',
      badge:
        'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200',
      dot: 'bg-emerald-500',
      progress: 'bg-emerald-500',
      text: 'text-emerald-600 dark:text-emerald-400',
      link: 'text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300',
    },
  }

  const colors = colorSchemes[color] || colorSchemes.blue
  const statusLabel =
    status === 'completed'
      ? 'Completed'
      : status === 'planning'
        ? 'Planning'
        : 'Active'
  const shouldAnimate = status === 'active' || status === 'planning'

  // Domain color mappings
  const domainColors = {
    Automotive: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    Software:
      'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    Mechanical:
      'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    Electronics:
      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  }

  const domainEmojis = {
    Automotive: '🚗',
    Software: '💻',
    Mechanical: '🔧',
    Electronics: '⚡',
  }

  return (
    <div
      className={`group relative rounded-2xl border ${colors.border} bg-gradient-to-br ${colors.bg} p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md`}
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
        {progress && (
          <div className={`text-sm ${colors.text}`}>{progress}%</div>
        )}
        {completedDate && (
          <div className={`text-xs ${colors.text}`}>{completedDate}</div>
        )}
      </div>

      {/* Project title */}
      <h3 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
        {title}
      </h3>

      {/* Description */}
      <p className='mb-4 text-sm text-gray-600 dark:text-gray-300'>
        {description}
      </p>

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

      {/* Domain badge for completed projects */}
      {domain && status === 'completed' && (
        <div className='mb-4'>
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${domainColors[domain] || domainColors.Software}`}
          >
            {domainEmojis[domain]} {domain}
          </span>
        </div>
      )}

      {/* Project details */}
      {(timeline || nextMilestones) && (
        <div className='space-y-2 text-sm mb-4'>
          {timeline && (
            <div>
              <span className='font-medium text-gray-700 dark:text-gray-300'>
                Timeline:
              </span>
              <span className='ml-2 text-gray-600 dark:text-gray-400'>
                {timeline}
              </span>
            </div>
          )}
          {nextMilestones && (
            <div>
              <span className='font-medium text-gray-700 dark:text-gray-300'>
                Next:
              </span>
              <span className='ml-2 text-gray-600 dark:text-gray-400'>
                {nextMilestones}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Action link */}
      {href && (
        <a
          href={href}
          className={`inline-flex items-center gap-1 text-sm font-medium ${colors.link}`}
        >
          {status === 'completed' ? 'Case Study' : 'View Progress'}
          <svg
            className='h-4 w-4'
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
      )}
    </div>
  )
}
