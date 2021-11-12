import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'

import { Background } from '../components/Background/Background'
import { Loading } from '../components/Loading/Loading'
import { Footer } from '../components/Footer/Footer'
import { Hero } from '../components/Hero/Hero'
import { Main } from '../components/Main/Main'

export default function Home() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2575);
  }, [])

  return (
    <Fragment>
      <Head>
        <meta name='robots' content='index, follow' />
        <title>Ton Almeida - Front-End Developer</title>
      </Head>
      {
        loading
        ?
        <Loading />
        :
        <Fragment>
          <Background />
          <Hero />
          <Main />
          <Footer />
        </Fragment>
      }
    </Fragment>
  )
}
