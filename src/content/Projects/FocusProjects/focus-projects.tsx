import React from 'react'
import { FocusCard } from './focus-card'
import { FocusProjectItems } from './focus-projects-data'

export const FocusProjects: React.FC = () => {
  return (
    <div className='mt-10 grid gap-6 md:grid-cols-2'>
      {FocusProjectItems.map(project => (
        <FocusCard
          key={project.title}
          title={project.title}
          timeline={project.timeline}
          progress={project.progress}
          description={project.description}
          nextMilestones={project.nextMilestones}
          href={project.href}
          status={project.status}
          action={project.action}
          color={project.color}
        />
      ))}
    </div>
  )
}

// Note: intentionally manually curated.
// These are *featured* projects, not a directory listing.
