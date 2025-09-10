export default function DomainCards({ domains, domainsTitle }) {
  return (
    <div className='w-full'>
      <div className='mx-auto max-w-6xl pt-12'>
        {/* Section heading */}
        <div className='mb-4 flex items-center gap-3'>
          <h2 className='text-xl font-semibold tracking-tight text-slate-900 dark:text-white'>
            {domainsTitle}
          </h2>
          <div className='h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-white/10' />
        </div>

        {/* Cards grid */}
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
          {domains.map(d => (
            <article
              key={d.title}
              className={`group relative rounded-2xl border bg-gradient-to-br ${d.style} p-5 shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md`}
            >
              <div className='mb-3 inline-flex items-center gap-2'>
                <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-white/70 text-slate-800 shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:text-white dark:ring-white/10'>
                  <d.icon className='h-5 w-5' />
                </div>
                <h3 className='text-base font-semibold text-slate-900 dark:text-white'>
                  {d.title}
                </h3>
              </div>
              <p className='text-sm leading-6 text-slate-700 dark:text-slate-300'>
                {d.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
