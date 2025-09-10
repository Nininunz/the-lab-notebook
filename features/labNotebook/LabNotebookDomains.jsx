import { Car, Cpu, Laptop, BookOpen, Wrench, FlaskConical } from 'lucide-react'
import DomainCards from '@/components/DomainCards'

export default function LabNotebookDomains() {
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
  return <DomainCards domainsTitle='Engineering Domains' domains={domains} />
}
