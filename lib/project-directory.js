export const projects = [
  {
    id: 1,
    name: 'Home Assistant SmartHub Integration',
    altNames: ['ha-smarthub'],
    fileName: 'ha-smarthub.mdx',
    href: '/projects/ha-smarthub',
    domains: ['Software'],
    status: 'completed',
    feature: [
      {
        title: 'ha-smarthub: Energy Data Import for Home Assistant',
        summary:
          'Imports daily SmartHub energy usage into InfluxDB and Home Assistant, enabling simple monitoring via MQTT and Node-RED.',
        tags: ['MQTT', 'InfluxDB', 'Node-RED'],
        image: '/images/featured/influx-db-energy-dash_full_16x9.png',
        href: 'https://github.com/nininunz/ha-smarthub',
      },
    ],
  },
  {
    id: 2,
    name: 'E83 CAS3 Retrofit & Comfort Access',
    altNames: ['e83-cas3-retrofit'],
    fileName: 'e83-cas3-retrofit.mdx',
    href: '/projects/e83-cas3-retrofit',
    domains: ['Automotive', 'Embedded', 'Electronics'],
    status: 'completed',
    feature: [
      {
        title: 'E83 CAS3 Retrofit & Comfort Access',
        summary:
          'Push-button start and keyless entry retrofit with full OEM integration.',
        tags: ['BMW', 'CAS3', 'Retrofit', 'Comfort Access'],
        image: '/images/featured/bmw-x3-e83-low-angle-muddy_full_7x5.png',
        href: '/projects/e83-cas3-retrofit',
      },
    ],
  },
]
