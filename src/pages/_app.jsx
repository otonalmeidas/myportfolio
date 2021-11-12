import Router from 'next/router'
import NProgress from 'nprogress'

import '../styles/globals.scss'
import '../styles/nprogress.scss'

import ContextPovider from "../contexts/Context"

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }) {
  return (
    <ContextPovider>
      <Component {...pageProps} />
    </ContextPovider>
  )
}
