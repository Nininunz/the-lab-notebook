// Project domains data
export const domains = [
  {
    id: 'automotive',
    name: 'Automotive',
    description:
      'Focus on BMW E-series retrofits, diagnostic tools, and engine analysis',
    projects: [
      {
        name: 'CAS3 Retrofit & Comfort Access',
        href: '/projects/e83-cas3-retrofit',
        status: 'completed',
      },
      {
        name: 'HomeLink Retrofit Guide',
        href: '/docs-guides/homelink-retrofit',
        status: 'completed',
      },
      {
        name: 'N52 Engine Analysis',
        href: '/docs-guides/e83-n52-rebuild',
        status: 'completed',
      },
      { name: 'BMW Diagnostic Tools', href: '/future', status: 'active' },
      { name: 'E46 M3 Restoration', href: '/future', status: 'archived' },
      {
        name: 'CAN Bus Protocol Analysis',
        href: '/future',
        status: 'completed',
      },
      { name: 'Custom ECU Programming', href: '/future', status: 'planning' },
      {
        name: 'VANOS System Repair Guide',
        href: '/future',
        status: 'completed',
      },
    ],
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Embedded systems, PCB design, and sensor integration',
    projects: [
      { name: 'Smart Grid Monitor', href: '/future', status: 'completed' },
      {
        name: 'ESP32 Development Platform',
        href: '/future',
        status: 'completed',
      },
      {
        name: 'Energy Dashboard Integration',
        href: '/future',
        status: 'completed',
      },
      { name: 'PCB Design Templates', href: '/future', status: 'active' },
      { name: 'Sensor Calibration Tools', href: '/future', status: 'planning' },
      { name: 'HomeKit Integration Hub', href: '/future', status: 'archived' },
    ],
  },
  {
    id: 'software',
    name: 'Software',
    description: 'Web applications, data processing, and API development',
    projects: [
      {
        name: 'Junkyard Intelligence Platform',
        href: '/future',
        status: 'active',
      },
      {
        name: 'Salvage-Yard Inventory System',
        href: '/future',
        status: 'ongoing',
      },
      { name: 'The Lab Notebook', href: '/changelog', status: 'active' },
      {
        name: 'SmartHub Data Export Utility',
        href: '/future',
        status: 'completed',
      },
      {
        name: 'ChatGPT macOS App Bundle',
        href: '/future',
        status: 'completed',
      },
      {
        name: 'API Gateway Architecture',
        href: '/future',
        status: 'completed',
      },
      { name: 'Data Pipeline Automation', href: '/future', status: 'active' },
      { name: 'Legacy System Migrations', href: '/future', status: 'archived' },
      { name: 'Web Scraping Framework', href: '/future', status: 'completed' },
      {
        name: 'Database Optimization Tools',
        href: '/future',
        status: 'planning',
      },
      { name: 'Authentication Service', href: '/future', status: 'completed' },
      { name: 'Monitoring Dashboard', href: '/future', status: 'active' },
    ],
  },
  {
    id: 'mechanical',
    name: 'Mechanical',
    description: 'CAD design, 3D printing, and fabrication work',
    projects: [
      {
        name: 'CoreXY FDM Printer Platform',
        href: '/future',
        status: 'completed',
      },
      { name: 'Custom Tooling Design', href: '/future', status: 'active' },
      { name: 'Fixture Design Library', href: '/future', status: 'planning' },
      {
        name: 'Rapid Prototyping Workflow',
        href: '/future',
        status: 'completed',
      },
    ],
  },
]
