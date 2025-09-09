import { Car, Cpu, Laptop, BookOpen, Wrench, FlaskConical } from 'lucide-react'

export default function LabNotebookLanding() {
  const domains = [
    {
      title: 'Automotive',
      desc: 'CAN bus diagnostics, EEPROM work, locksmithing, retrofits, harness fabrication, module repair, and full mechanical rebuilds.',
      icon: Car,
      style:
        'from-rose-50 to-rose-100/50 border-rose-200/70 dark:from-rose-950/30 dark:to-rose-900/10 dark:border-rose-800/60',
    },
    {
      title: 'Electronics & Embedded',
      desc: 'Microsoldering and board rework, microcontroller & sensor integration, power electronics, and hardware‑in‑the‑loop debugging.',
      icon: Cpu,
      style:
        'from-amber-50 to-amber-100/50 border-amber-200/70 dark:from-amber-950/30 dark:to-amber-900/10 dark:border-amber-800/60',
    },
    {
      title: 'Software & Systems',
      desc: 'Web apps, system architecture, data pipelines, developer tooling, automation workflows, and API integrations.',
      icon: Laptop,
      style:
        'from-sky-50 to-sky-100/50 border-sky-200/70 dark:from-sky-950/30 dark:to-sky-900/10 dark:border-sky-800/60',
    },
    {
      title: 'Notes & References',
      desc: 'Schematics, wiring diagrams, pinouts, quick‑reference tables, and field‑tested documentation from ongoing projects.',
      icon: BookOpen,
      style:
        'from-emerald-50 to-emerald-100/50 border-emerald-200/70 dark:from-emerald-950/30 dark:to-emerald-900/10 dark:border-emerald-800/60',
    },
    {
      title: 'Mechanical & Fabrication',
      desc: 'CAD modeling, 3D printing, custom tooling, fixture design, machining, and assemblies.',
      icon: Wrench,
      style:
        'from-violet-50 to-violet-100/50 border-violet-200/70 dark:from-violet-950/30 dark:to-violet-900/10 dark:border-violet-800/60',
    },
    {
      title: 'Miscellaneous',
      desc: 'Cross‑disciplinary experiments, exploratory builds, and one‑off investigations.',
      icon: FlaskConical,
      style:
        'from-indigo-50 to-indigo-100/50 border-indigo-200/70 dark:from-indigo-950/30 dark:to-indigo-900/10 dark:border-indigo-800/60',
    },
  ]

  return (
    <div className='min-h-[80vh] w-full'>
      <div className='mx-auto max-w-6xl py-12 md:py-16'>
        {/* Section heading */}
        <div className='mb-4 flex items-center gap-3'>
          <h2 className='text-xl font-semibold tracking-tight text-slate-900 dark:text-white'>
            Engineering Domains
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
