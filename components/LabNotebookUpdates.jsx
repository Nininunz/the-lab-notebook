export default function LabNotebookUpdates() {
  const updates = [
    {
      date: '2025-09-06',
      text: 'Completed N52 engine teardown and cylinder head inspection analysis.',
    },
  ]

  return (
    <div>
      {/* Updates timeline */}
      <div className='mt-12 mb-3 flex items-center gap-3'>
        <h2 className='text-xl font-semibold tracking-tight text-slate-900 dark:text-white'>
          Updates
        </h2>
        <div className='h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-white/10' />
      </div>
      <ol className='space-y-4'>
        {updates.map(u => (
          <li
            key={u.date}
            className='relative rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/5'
          >
            <div className='mb-1 text-xs font-medium text-slate-500 dark:text-slate-400'>
              {u.date}
            </div>
            <p className='text-sm text-slate-800 dark:text-slate-200'>
              {u.text}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}
