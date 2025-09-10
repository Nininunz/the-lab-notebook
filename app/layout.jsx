import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Logo } from '@/app/Logo'
import 'nextra-theme-docs/style.css'
import './global.css'

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const navbar = (
  <Navbar
    logo={<Logo />}
    // ... Your additional navbar options
  />
)
const footer = <Footer>© {new Date().getFullYear()} The Lab Notebook</Footer>

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang='en'
      // Required to be set
      dir='ltr'
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase='https://github.com/nininunz/the-lab-notebook/tree/main/'
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
