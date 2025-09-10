import ProjectCardLarge from '@/components/ProjectCardLarge'

export default function AllProjectsActive() {
  return (
    <div className='grid gap-6 mt-10 md:grid-cols-2'>
      <ProjectCardLarge
        title='Junkyard Intelligence Platform'
        timeline='Ongoing'
        progress={45}
        description='Next-generation salvage yard inventory system with AI-powered part identification, predictive availability modeling, real-time multi-yard aggregation, and a low-latency search interface—built for accuracy, scalability, and actionable insights.'
        nextMilestones='Computer vision training, cross-platform mobile app development, MVP development'
        href='/project/junkyard-intelligence-platform'
        status='Active'
        color='purple'
        disabled
      />

      {/* <ProjectCardLarge
        title='Project Alpha'
        timeline='2035 Q1-Q4'
        progress={60}
        description='blah blah blah'
        nextMilestones='blah blah blah'
        href='/future'
        status='active'
        color='blue'
        disabled
      />

      <ProjectCardLarge
        title='Project Beta'
        timeline='2035 Q1-Q4'
        progress={60}
        description='blah blah blah'
        nextMilestones='blah blah blah'
        href='/future'
        status='active'
        color='green'
        disabled
      /> */}
    </div>
  )
}
