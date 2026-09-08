import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

const REPO_URL = 'https://github.com/aa3682/solo-ria-guide'

export const metadata = {
  title: {
    default: 'The Independent Path',
    template: '%s – The Independent Path'
  },
  description: 'An open guide to establishing and running an independent registered investment advisory firm.'
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={<Navbar logo={<b>The Independent Path</b>} projectLink={REPO_URL} />}
          footer={<Footer>{new Date().getFullYear()} © The Independent Path</Footer>}
          docsRepositoryBase={`${REPO_URL}/blob/main`}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
