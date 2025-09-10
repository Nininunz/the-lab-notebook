import ProjectCardSmall from '@/components/ProjectCardSmall'

export default function AllProjectsCompleted() {
  return (
    <div className='mt-10 space-y-3'>
      <ProjectCardSmall
        title='CAS3 Retrofit & Comfort Access'
        description='Push-button start and keyless entry retrofit with full OEM integration.'
        completedDate='2025 Q1'
        domain='Automotive'
        href='/projects/e83-cas3-retrofit'
      />
    </div>
  )
}
