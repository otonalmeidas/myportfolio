import Head from 'next/head'

import { ErrorPage } from '../components/ErrorPage/ErrorPage'

export default function FourZeroFour() {
  return (
    <>
      <Head>
        <title>Página não encontrada | Ton Almeida - Front-End Developer</title>
      </Head>
      <ErrorPage />
    </>
  )
}