import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { Metadata } from 'next'
import { Logo } from './Logo'
import { Analytics } from './Analytics'
import 'nextra-theme-docs/style.css'
import './global.css'

export const metadata: Metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const navbar = (
  <Navbar
    logo={<Logo />}
    // projectLink and chatLink are flipped for positioning purposes
    projectLink='https://nininunz.dev'
    projectIcon={
      <svg fill='currentColor' viewBox='0 0 512 512' height='24' aria-label='Server'>
        <path d='M457.697 324.848l-23.273 4.231-93.091 16.924v26.36c0 12.853-10.418 23.273-23.273 23.273H193.939c-12.851 0-23.273-10.42-23.273-23.273v-26.36l-93.091-16.924-23.273-4.233-23.273-4.233V480.97c0 12.853 10.422 23.273 23.273 23.273h403.394c12.854 0 23.273-10.42 23.273-23.273V320.616l-23.272 4.232z' />
        <path d='M488.727 100.848H372.364V31.03c0-12.853-10.418-23.273-23.273-23.273H162.909c-12.851 0-23.273 10.42-23.273 23.273v69.818H23.273C10.422 100.848 0 111.27 0 124.121v124.121c0 11.247 8.046 20.885 19.11 22.897l33.548 6.101 11.371 2.067 106.637 19.389v-19.423c0-12.853 10.422-23.273 23.273-23.273h124.123c12.854 0 23.273 10.42 23.273 23.273v19.423l106.636-19.389 11.373-2.067 33.548-6.101c11.067-2.012 19.108-11.65 19.108-22.897V124.121c0-12.851-10.417-23.273-23.273-23.273zm-162.907-23.272v23.273H186.182V54.303h139.638v23.273z' />
      </svg>
    }
    chatLink='https://github.com/nininunz/the-lab-notebook'
    chatIcon={
      <svg fill='currentColor' viewBox='3 3 18 18' height='24' aria-label='Project repository'>
        <path d='M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z' />
      </svg>
    }
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
        <Analytics />
      </body>
    </html>
  )
}
