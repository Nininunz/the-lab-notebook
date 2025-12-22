import { Project } from './project-directory.d'

export const projects: Project[] = [
  {
    id: 1,
    name: 'Home Assistant SmartHub Integration',
    altNames: ['ha-smarthub'],
    href: '/project/ha-smarthub',
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
    href: '/project/e83-cas3-retrofit',
    domains: ['Automotive', 'Embedded', 'Electronics'],
    status: 'completed',
    completedDate: '2025 Q1',
    feature: [
      {
        title: 'E83 CAS3 Retrofit & Comfort Access',
        summary:
          'Push-button start and keyless entry retrofit with full OEM integration.',
        tags: ['BMW', 'CAS3', 'Retrofit', 'Comfort Access'],
        image: '/images/featured/bmw-x3-e83-low-angle-muddy_full_7x5.png',
        href: 'https://nininunz.dev/bmw-cas-retrofit',
      },
    ],
  },
  {
    id: 3,
    name: 'N52 Engine Carbon Valve Failure Analysis',
    altNames: [
      'mysterious-n52-carbon-valves',
      'The Mysterious BMW N52 Engine Failure',
    ],
    href: '/project/mysterious-n52-carbon-valves',
    domains: ['Automotive', 'Mechanical'],
    status: 'completed',
  },
  {
    id: 4,
    name: 'Junkyard Intelligence Platform',
    altNames: ['junkyard-intelligence-platform', 'jip', 'dumpyard'],
    href: '/project/junkyard-intelligence-platform',
    domains: ['Software'],
  },
  {
    id: 5,
    name: 'BMW HomeLink Mirror Retrofit Guide',
    altNames: ['homelink-retrofit'],
    href: '/project/homelink-retrofit',
    domains: ['Automotive', 'Electronics'],
    status: 'completed',
  },
  {
    id: 6,
    name: 'ChatGPT for Intel Macs',
    altNames: ['gpt-electron'],
    href: '/project/gpt-electron',
    domains: ['Software'],
    status: 'completed',
    feature: [
      {
        title: 'gpt-electron: ChatGPT for Intel Macs',
        summary:
          "A lightweight Electron wrapper for ChatGPT, tailored for Intel Macs that can't run the official OpenAI desktop app.",
        tags: ['ChatGPT', 'Electron', 'OpenAI'],
        image: '/images/featured/gpt-electron-site_full_16x9.png',
        href: 'https://nininunz.dev/gpt-electron',
      },
    ],
  },
]
