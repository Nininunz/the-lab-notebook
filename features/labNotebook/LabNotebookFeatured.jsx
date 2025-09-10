import FeaturedCards from '@/components/FeaturedCards'

export default function LabNotebookFeatured() {
  const featured = [
    {
      title: 'ha-smarthub: Energy Data Import for Home Assistant',
      summary:
        'Imports daily SmartHub energy usage into InfluxDB and Home Assistant, enabling simple monitoring via MQTT and Node-RED.',
      tags: ['MQTT', 'InfluxDB', 'Node-RED'],
      href: '/future',
      image: '/images/featured/influx-db-energy-dash_full_16x9.png',
    },
    {
      title: 'Feature Project Beta',
      summary: 'blah blah blah',
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
      href: '/future',
      image: '/images/placeholders/placeholder-5-3.svg',
    },
    {
      title: 'Feature Project Gamma',
      summary: 'blah blah blah',
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
      href: '/future',
      image: '/images/placeholders/placeholder-5-3.svg',
    },
  ]
  return <FeaturedCards featured={featured} />
}
;``
