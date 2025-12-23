import { SectionTitle, FeatureCard } from './components'

export function Featured() {
  // List of project ids to feature
  const featuredIds = [1, 2, 6] // e83-cas3-retrofit, ha-smarthub, gpt-electron
  const featuredProjects = projects.filter(p => featuredIds.includes(p.id))

  return (
    <SectionTitle title='Featured Projects'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
        {featuredProjects.map(project =>
          project.feature.map(feature => (
            <FeatureCard
              key={project.id + '-' + feature.href}
              title={feature.title}
              summary={feature.summary}
              tags={feature.tags}
              href={feature.href}
              image={feature.image}
            />
          ))
        )}
      </div>
    </SectionTitle>
  )
}
