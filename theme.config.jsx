import { useRouter } from 'next/router'

const config = {
  logo: <span>The Lab Notebook</span>,
  project: {
    link: 'https://github.com/nininunz/the-lab-notebook',
  },
  docsRepositoryBase: 'https://github.com/nininunz/the-lab-notebook/tree/main',
  footer: {
    text: `© ${new Date().getFullYear()} The Lab Notebook.`,
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – The Lab Notebook',
      }
    }
  },
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='The Lab Notebook' />
      <meta
        property='og:description'
        content='Engineering documentation and project notes'
      />
      <meta
        property='og:image'
        content='https://docs.nininunz.dev/images/meta.png'
      />
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
