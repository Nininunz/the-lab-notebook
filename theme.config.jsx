import { useRouter } from 'next/router'

const config = {
  logo: <span>My Nextra Documentation</span>,
  project: {
    link: 'https://github.com/yourusername/nextra',
  },
  docsRepositoryBase: 'https://github.com/yourusername/nextra/tree/main',
  footer: {
    text: `MIT ${new Date().getFullYear()} © My Documentation.`,
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – My Docs',
      }
    }
  },
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='My Documentation' />
      <meta property='og:description' content='The next site builder' />
    </>
  ),
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className='cursor-default'>{title}</span>
      }
      return <>{title}</>
    },
  },
  toc: {
    backToTop: true,
  },
}

export default config
