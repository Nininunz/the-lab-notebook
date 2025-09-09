export default function CompletedProjectCard({
  title,
  description,
  completedDate,
  domain,
  href,
  linkText = 'Case Study',
  color = 'emerald',
}) {
  // Color schemes matching ProjectCard structure
  const colorSchemes = {
    emerald: {
      border: 'border-emerald-200 dark:border-emerald-800/50',
      bg: 'from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20',
      badge:
        'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200',
      dot: 'bg-emerald-500',
      text: 'text-emerald-600 dark:text-emerald-400',
      link: 'text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300',
    },
    blue: {
      border: 'border-blue-200 dark:border-blue-800/50',
      bg: 'from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20',
      badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200',
      dot: 'bg-blue-500',
      text: 'text-blue-600 dark:text-blue-400',
      link: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
    },
    green: {
      border: 'border-green-200 dark:border-green-800/50',
      bg: 'from-green-50 to-green-100/50 dark:from-green-950/30 dark:to-green-900/20',
      badge:
        'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200',
      dot: 'bg-green-500',
      text: 'text-green-600 dark:text-green-400',
      link: 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300',
    },
    purple: {
      border: 'border-purple-200 dark:border-purple-800/50',
      bg: 'from-purple-50 to-purple-100/50 dark:from-purple-950/30 dark:to-purple-900/20',
      badge:
        'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200',
      dot: 'bg-purple-500',
      text: 'text-purple-600 dark:text-purple-400',
      link: 'text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300',
    },
    red: {
      border: 'border-red-200 dark:border-red-800/50',
      bg: 'from-red-50 to-red-100/50 dark:from-red-950/30 dark:to-red-900/20',
      badge: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200',
      dot: 'bg-red-500',
      text: 'text-red-600 dark:text-red-400',
      link: 'text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300',
    },
    orange: {
      border: 'border-orange-200 dark:border-orange-800/50',
      bg: 'from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20',
      badge:
        'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200',
      dot: 'bg-orange-500',
      text: 'text-orange-600 dark:text-orange-400',
      link: 'text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300',
    },
    yellow: {
      border: 'border-yellow-200 dark:border-yellow-800/50',
      bg: 'from-yellow-50 to-yellow-100/50 dark:from-yellow-950/30 dark:to-yellow-900/20',
      badge:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200',
      dot: 'bg-yellow-500',
      text: 'text-yellow-600 dark:text-yellow-400',
      link: 'text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300',
    },
    slate: {
      border: 'border-slate-200 dark:border-slate-700',
      bg: 'from-slate-50 to-slate-100/50 dark:from-slate-900/20 dark:to-slate-950/10',
      badge:
        'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200',
      dot: 'bg-slate-500',
      text: 'text-slate-600 dark:text-slate-400',
      link: 'text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300',
    },
  }

  const colors = colorSchemes[color] || colorSchemes.emerald

  return (
    <div
      className={`group flex items-center justify-between rounded-lg border ${colors.border} bg-gradient-to-r ${colors.bg} p-4 transition hover:-translate-y-0.5 hover:shadow-md hover:${colors.border}`}
    >
      {/* Left side: Status badge + Content */}
      <div className='flex items-center gap-4'>
        {/* Completion checkmark icon */}
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colors.badge} shadow-sm`}
        >
          <svg
            className='h-5 w-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 13l4 4L19 7'
            />
          </svg>
        </div>

        {/* Project info */}
        <div>
          <h3 className='font-semibold text-gray-900 dark:text-white'>
            {title}
          </h3>
          <p className='text-sm text-gray-600 dark:text-gray-300'>
            {description}
          </p>
        </div>
      </div>

      {/* Right side: Date, Domain, Arrow */}
      <div className='flex items-center gap-4'>
        {/* Completion info */}
        <div className='text-right'>
          <div className={`text-sm font-semibold ${colors.text}`}>
            {completedDate}
          </div>
          {domain && (
            <div className='text-xs font-medium text-gray-500 dark:text-gray-400'>
              {domain}
            </div>
          )}
        </div>

        {/* Navigation arrow */}
        {href && (
          <a
            href={href}
            className={`${colors.link} transition`}
            title={linkText}
          >
            <svg
              className='h-5 w-5'
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
    </div>
  )
}
