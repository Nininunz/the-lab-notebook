// color-schemes.ts

type ColorVariant = 'blue' | 'green' | 'purple' | 'emerald'

interface ColorScheme {
  border: string
  bg: string
  badge: string
  dot: string
  progress: string
  next: string
  text: string
  link: string
}

export const colorSchemes: Record<ColorVariant, ColorScheme> = {
  blue: {
    border: 'border-blue-200 dark:border-blue-800/50',
    bg: 'from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20',
    badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200',
    dot: 'bg-blue-500',
    progress: 'bg-blue-500',
    next: 'text-blue-800 dark:text-blue-200',
    text: 'text-blue-600 dark:text-blue-400',
    link: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
  },
  green: {
    border: 'border-green-200 dark:border-green-800/50',
    bg: 'from-green-50 to-green-100/50 dark:from-green-950/30 dark:to-green-900/20',
    badge: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200',
    dot: 'bg-green-500',
    progress: 'bg-green-500',
    next: 'text-green-800 dark:text-green-200',
    text: 'text-green-600 dark:text-green-400',
    link: 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300',
  },
  purple: {
    border: 'border-purple-200 dark:border-purple-800/50',
    bg: 'from-purple-50 to-purple-100/50 dark:from-purple-950/30 dark:to-purple-900/20',
    badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200',
    dot: 'bg-purple-500',
    progress: 'bg-purple-500',
    next: 'text-purple-800 dark:text-purple-200',
    text: 'text-purple-600 dark:text-purple-400',
    link: 'text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300',
  },
  emerald: {
    border: 'border-emerald-200 dark:border-emerald-800/50',
    bg: 'from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20',
    badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200',
    dot: 'bg-emerald-500',
    progress: 'bg-emerald-500',
    next: 'text-emerald-800 dark:text-emerald-200',
    text: 'text-emerald-600 dark:text-emerald-400',
    link: 'text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300',
  },
}
