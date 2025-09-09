export default function CompletedProjectCard({
  title,
  description,
  completedDate,
  domain,
  href,
  linkText = 'Case Study',
  color = 'emerald',
}) {
  // Color schemes (independent of domain)
  const colorSchemes = {
    emerald: {
      border: 'border-emerald-200 dark:border-emerald-800/30',
      bg: 'from-emerald-50 to-emerald-50/50 dark:from-emerald-950/20 dark:to-emerald-950/10',
      hoverBorder: 'hover:border-emerald-300',
      icon: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400',
      date: 'text-emerald-700 dark:text-emerald-400',
      domainTag: 'text-emerald-600 dark:text-emerald-500',
      arrow:
        'text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300',
    },
    blue: {
      border: 'border-blue-200 dark:border-blue-800/30',
      bg: 'from-blue-50 to-blue-50/50 dark:from-blue-950/20 dark:to-blue-950/10',
      hoverBorder: 'hover:border-blue-300',
      icon: 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400',
      date: 'text-blue-700 dark:text-blue-400',
      domainTag: 'text-blue-600 dark:text-blue-500',
      arrow: 'text-blue-400 hover:text-blue-600 dark:hover:text-blue-300',
    },
    red: {
      border: 'border-red-200 dark:border-red-800/30',
      bg: 'from-red-50 to-red-50/50 dark:from-red-950/20 dark:to-red-950/10',
      hoverBorder: 'hover:border-red-300',
      icon: 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400',
      date: 'text-red-700 dark:text-red-400',
      domainTag: 'text-red-600 dark:text-red-500',
      arrow: 'text-red-400 hover:text-red-600 dark:hover:text-red-300',
    },
    orange: {
      border: 'border-orange-200 dark:border-orange-800/30',
      bg: 'from-orange-50 to-orange-50/50 dark:from-orange-950/20 dark:to-orange-950/10',
      hoverBorder: 'hover:border-orange-300',
      icon: 'bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400',
      date: 'text-orange-700 dark:text-orange-400',
      domainTag: 'text-orange-600 dark:text-orange-500',
      arrow: 'text-orange-400 hover:text-orange-600 dark:hover:text-orange-300',
    },
    yellow: {
      border: 'border-yellow-200 dark:border-yellow-800/30',
      bg: 'from-yellow-50 to-yellow-50/50 dark:from-yellow-950/20 dark:to-yellow-950/10',
      hoverBorder: 'hover:border-yellow-300',
      icon: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400',
      date: 'text-yellow-700 dark:text-yellow-400',
      domainTag: 'text-yellow-600 dark:text-yellow-500',
      arrow: 'text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-300',
    },
    purple: {
      border: 'border-purple-200 dark:border-purple-800/30',
      bg: 'from-purple-50 to-purple-50/50 dark:from-purple-950/20 dark:to-purple-950/10',
      hoverBorder: 'hover:border-purple-300',
      icon: 'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400',
      date: 'text-purple-700 dark:text-purple-400',
      domainTag: 'text-purple-600 dark:text-purple-500',
      arrow: 'text-purple-400 hover:text-purple-600 dark:hover:text-purple-300',
    },
    slate: {
      border: 'border-slate-200 dark:border-slate-700',
      bg: 'from-slate-50 to-slate-50/50 dark:from-slate-900/20 dark:to-slate-950/10',
      hoverBorder: 'hover:border-slate-300',
      icon: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
      date: 'text-slate-700 dark:text-slate-400',
      domainTag: 'text-slate-600 dark:text-slate-500',
      arrow: 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300',
    },
  }

  const colors = colorSchemes[color] || colorSchemes.emerald

  return (
    <div
      className={`group flex items-center justify-between rounded-lg border ${colors.border} bg-gradient-to-r ${colors.bg} p-4 transition hover:shadow-md ${colors.hoverBorder}`}
    >
      {/* Left side: Icon + Content */}
      <div className='flex items-center gap-4'>
        {/* Completion checkmark icon */}
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colors.icon} shadow-sm`}
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
          <div className={`text-sm font-semibold ${colors.date}`}>
            {completedDate}
          </div>
          <div className={`text-xs font-medium ${colors.domainTag}`}>
            {domain}
          </div>
        </div>

        {/* Navigation arrow */}
        {href && (
          <a
            href={href}
            className={`${colors.arrow} transition`}
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
