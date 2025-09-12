export default function InfoCard({ title, desc, icon: Icon, style }) {
  return (
    <article
      className={`group relative rounded-2xl border bg-gradient-to-br ${style} p-5 shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md`}
    >
      <div className='mb-3 inline-flex items-center gap-2'>
        <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-white/70 text-slate-800 shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:text-white dark:ring-white/10'>
          <Icon className='h-5 w-5' />
        </div>
        <h3 className='text-base font-semibold text-slate-900 dark:text-white'>
          {title}
        </h3>
      </div>
      <p className='text-sm leading-6 text-slate-700 dark:text-slate-300'>
        {desc}
      </p>
    </article>
  )
}
