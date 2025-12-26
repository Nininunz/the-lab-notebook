import { SectionTitle, FeatureCard } from './components'
import { FeatureEntryItems } from './data/feature-entries'

export function Featured() {
  return (
    <SectionTitle title='Featured Projects'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
        {FeatureEntryItems.map(feature => (
          <FeatureCard
            key={feature.href}
            title={feature.title}
            summary={feature.summary}
            tags={feature.tags}
            href={feature.href}
            image={feature.image}
          />
        ))}
      </div>
    </SectionTitle>
  )
}
