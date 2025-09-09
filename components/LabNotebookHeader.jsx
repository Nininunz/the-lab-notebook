export default function LabNotebookHeader() {
  return (
    <div className='w-full'>
      <div className='mx-auto max-w-6xl'>
        <div className='relative'>
          {/* Background grid pattern */}
          <div className='absolute inset-0 bottom-[-70px] bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:24px_24px] bg-[position:center] opacity-30' />

          <div className='relative'>
            {/* Header badge */}
            <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'>
              <div className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
              Engineering Documentation
            </div>

            {/* Main title */}
            <h1 className='mb-4 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white'>
              The Lab
              <br />
              <span className='text-slate-600 dark:text-slate-400'>
                Notebook
              </span>
            </h1>

            {/* Description */}
            <div className='max-w-2xl space-y-3'>
              <p className='text-xl text-slate-600 dark:text-slate-300'>
                A curated portfolio of engineering writeups and project
                documentation spanning software, electronics, and mechanical
                systems.
              </p>
              <p className='text-base text-slate-500 dark:text-slate-400'>
                A small window into my work — the rest remains confidential or
                not publicly documented.
              </p>
            </div>

            {/* Decorative line */}
            {/* <div className='mt-8 flex items-center gap-4'>
              <div className='h-px w-16 bg-slate-300 dark:bg-slate-600' />
              <div className='text-xs font-mono text-slate-400 dark:text-slate-500'>
                {new Date().getFullYear()}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
