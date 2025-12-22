import React from 'react'
import ProjectCardSmall from '@/components/ProjectCardSmall'
import { projects } from '@/lib/project-directory'

const AllProjectsCompleted: React.FC = () => {
  // Specify completed project IDs here
  const completedIds = [2]
  const completedProjects = projects.filter(
    p => completedIds.includes(p.id) && p.status === 'completed'
  )

  return (
    <div className='mt-10 space-y-3'>
      {completedProjects.map(project => (
        <ProjectCardSmall
          key={project.id}
          title={project.name}
          description={project.feature?.[0]?.summary || ''}
          completedDate={project.completedDate}
          domain={project.domains[0]}
          href={project.href}
        />
      ))}
    </div>
  )
}

export default AllProjectsCompleted
