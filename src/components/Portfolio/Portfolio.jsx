import { CardMini } from '../CardMini/CardMini'
import { Title } from '../Title/Title'
import { Card } from '../Card/Card'

import {
  IoLogoSass,
  IoLogoCss3,
  IoLogoFigma,
  IoLogoReact,
  IoLogoFirebase,
  IoLogoHtml5,
  IoLogoApple,
  IoLogoGoogle,
  IoLogoDiscord
} from 'react-icons/io5'
import { SiTailwindcss } from 'react-icons/si'
import { FaWikipediaW } from 'react-icons/fa'

import styles from './styles.module.scss'

export function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.portfolio__grid}>
        <div />
        <Title index="02" one="Projetos próprios" two="Portfólio" />
      </div>
      <div className={styles.portfolio__jobs}>
        <Card link="/" title="DoWhile 2021" paragraph="Envie e compartilhe sua mensagem sobre o evento DoWhile 2021 da Rocketseat.">
          <IoLogoSass /><IoLogoReact />
        </Card>
        <Card link="/" title="Letmeask" paragraph="Crie salas de Q&A ao-vivo. Tire as dúvidas da sua audiência em tempo real.">
          <IoLogoReact /><IoLogoFirebase />
        </Card>
        <Card link="/" title="Redesign do Wikipedia" paragraph="Versão web redesenhada do tão querido site Wikipedia construida em React.">
          <SiTailwindcss /><IoLogoReact /><IoLogoFigma />
        </Card>
        <Card link="/" title="Ecoleta" paragraph="Um site que visa unir pessoas e empresas afim criar pontos de coleta.">
          <IoLogoHtml5 /><IoLogoCss3 />
        </Card>
      </div>
      <div className={styles.portfolio__specials}>
        <CardMini link="https://apple-uiclone.netlify.app/" title="Apple" tag="Clone">
          <IoLogoApple />
        </CardMini>
        <CardMini link="https://google-redesign.netlify.app/" title="Google" tag="Redesign">
          <IoLogoGoogle />
        </CardMini>
        <CardMini link="/" title="Discord" tag="Clone">
          <IoLogoDiscord />
        </CardMini>
        <CardMini link="/" title="Wikipédia" tag="Redesign">
          <FaWikipediaW />
        </CardMini>
        <CardMini link="/" title="Meu site" tag="Especial">
          <img src="favicon.png" alt="Logo" />
        </CardMini>
      </div>
    </section>
  )
}