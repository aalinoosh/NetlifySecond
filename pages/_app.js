import '../styles/globals.css'
import '../styles/tailwind.css'
import { PageContext, usePageContext } from "../context/PageContext"

function MyApp({ Component, pageProps }) {
  const pageContextValue = usePageContext()
  return (
    <PageContext.Provider value={pageContextValue}>
      <Component {...pageProps} />
    </PageContext.Provider>
  )
}

export default MyApp
