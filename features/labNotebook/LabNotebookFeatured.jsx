import FeatureCard from '@/components/FeatureCard'
import SectionTitle from '@/components/SectionTitle'

export default function LabNotebookFeatured() {
  return (
    <div>
      <SectionTitle title='Featured Projects' />
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        <FeatureCard
          title='ha-smarthub: Energy Data Import for Home Assistant'
          summary='Imports daily SmartHub energy usage into InfluxDB and Home Assistant, enabling simple monitoring via MQTT and Node-RED.'
          tags={['MQTT', 'InfluxDB', 'Node-RED']}
          href='/future'
          image='/images/featured/influx-db-energy-dash_full_16x9.png'
        />
        <FeatureCard
          title='Feature Project Beta'
          summary='blah blah blah'
          tags={['Tag 1', 'Tag 2', 'Tag 3']}
          href='/future'
          image='/images/placeholders/placeholder-5-3.svg'
        />
        <FeatureCard
          title='Feature Project Gamma'
          summary='blah blah blah'
          tags={['Tag 1', 'Tag 2', 'Tag 3']}
          href='/future'
          image='/images/placeholders/placeholder-5-3.svg'
        />
      </div>
    </div>
  )
}
