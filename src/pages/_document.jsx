import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          <meta httpEquiv='cache-control' content='public' />
          <meta name='language' content='pt-BR' />
          <meta name='author' content='Ton Almeida' />
          <meta name='google-site-verification' content='OKClghwYRK1vxZ8ZiFl3cLGJJlTKgwJHv1aQkuUA5x8' />
          <meta name="msvalidate.01" content="09F183CE40D2E8D217A75D96699C204D" />
          <meta name='description' content='Desenvolvedor Front-End, entusiasta de ReactJS e apaixonado por UI/UX Design.' />
          <meta name='keywords' content='desenvolvedor, developer, frontend, react, html, css, javascript, programador, responsive, seo, design, ux/ui, ton, almeida' />
          <meta property='og:image' content='https://raw.githubusercontent.com/otonalmeidas/myportfolio/master/public/ogimage.png' />
          <meta property='og:type' content='page' />
          <meta property='og:locale' content='pt_BR' />
          <meta property='og:url' content='https://www.wellingtondas.com' />
          <meta property='og:title' content='Ton Almeida – Front-End Developer' />
          <meta property='og:description' content='Desenvolvedor Front-End, entusiasta de ReactJS e apaixonado por UI/UX Design. Em São Paulo, SP.' />
          <meta property='og:article:tags' content='desenvolvedor, developer, frontend, react, html, css, javascript, programador, responsive, seo, design, ux/ui, ton, almeida' />
          <meta property='og:article:author' content='Ton Almeida' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@otonalmeidas' />
          <meta name='twitter:title' content='Ton Almeida – Front-End Developer' />
          <meta name='twitter:creator' content='@otonalmeidas' />
          <meta name='twitter:description' content='Desenvolvedor Front-End, entusiasta de ReactJS e apaixonado por UI/UX Design. Em São Paulo, SP.' />
          <link rel='icon' href='favicon.webp' type='image/webp' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href="https://fonts.gstatic.com" />
          <link href='https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&display=swap' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
