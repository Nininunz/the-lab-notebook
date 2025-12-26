export type FeatureEntry = {
  title: string
  summary: string
  tags: string[]
  image: string
  href: string
}

export const FeatureEntryItems: FeatureEntry[] = [
  {
    title: 'ha-smarthub: Energy Data Import for Home Assistant',
    summary:
      'Imports daily SmartHub energy usage into InfluxDB and Home Assistant, enabling simple monitoring via MQTT and Node-RED.',
    tags: ['MQTT', 'InfluxDB', 'Node-RED'],
    image: '/images/featured/influx-db-energy-dash_full_16x9.png',
    href: 'https://github.com/nininunz/ha-smarthub',
  },
  {
    title: 'E83 CAS3 Retrofit & Comfort Access',
    summary: 'Push-button start and keyless entry retrofit with full OEM integration.',
    tags: ['BMW', 'CAS3', 'Retrofit', 'Comfort Access'],
    image: '/images/featured/bmw-x3-e83-low-angle-muddy_full_7x5.png',
    href: 'https://nininunz.dev/bmw-cas-retrofit',
  },
  {
    title: 'gpt-electron: ChatGPT for Intel Macs',
    summary:
      "A lightweight Electron wrapper for ChatGPT, tailored for Intel Macs that can't run the official OpenAI desktop app.",
    tags: ['ChatGPT', 'Electron', 'OpenAI'],
    image: '/images/featured/gpt-electron-site_full_16x9.png',
    href: 'https://nininunz.dev/gpt-electron',
  },
]
