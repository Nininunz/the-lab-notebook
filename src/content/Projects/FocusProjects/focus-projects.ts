import { FocusCardProps } from './focus-card'

export const FocusProjectItems: FocusCardProps[] = [
  {
    title: 'Junkyard Intelligence Platform',
    timeline: 'Ongoing',
    progress: 45,
    description:
      'Next-generation salvage yard inventory system with AI-powered part identification, predictive availability modeling, real-time multi-yard aggregation, and a low-latency search interface—built for accuracy, scalability, and actionable insights.',
    nextMilestones:
      'Computer vision training, cross-platform mobile app development, MVP development',
    href: '/project/junkyard-intelligence-platform',
    status: 'Active',
    color: 'purple',
    // action: 'View Progress',
    completedDate: '',
  },
  {
    title: 'The Lab Notebook',
    timeline: '2025 Q3',
    progress: 60,
    description:
      'A comprehensive development workspace and documentation platform built with Next.js and Nextra, featuring project tracking, technical notes, and a searchable knowledge base for engineering insights and prototypes.',
    nextMilestones:
      'Content organization improvements, case study writeups, new project additions, content migration',
    href: '/project/the-lab-notebook',
    status: 'active',
    color: 'blue',
    // action: 'Case Study',
    completedDate: '',
  },
] as const
