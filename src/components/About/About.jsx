import Link from 'next/link'

import { Button } from '../Button/Button'
import { Title } from '../Title/Title'
import { Tags } from '../Tags/Tags'

import { IoDocumentTextOutline } from 'react-icons/io5'
import { FaInstagram } from 'react-icons/fa'

import styles from './styles.module.scss'

export function About() {
  return (
    <section className={styles.about} id="sobre">
      <div className={styles.about__left}>
        <Link href="https://www.instagram.com/otonalmeidas/">
          <a className={styles.about__photo} target="_blank" rel="noopener noreferrer" title="Foto de Ton Almeida">
            <img
              src="perfil.png"
              alt="Foto de Wellington"
            />
            <FaInstagram />
          </a>
        </Link>
        <Tags />
      </div>
      <div className={styles.about__right}>
        <Title index="01" one="Olá, eu sou o" two="Ton Almeida" />
        <p className={styles.about__paragraph}>
          Me chamo Wellington, mais conhecido como Ton, tenho 24 anos
          e resido em São Paulo SP. Trabalho com desenvolvimento
          Front-End e UI Design há pouco mais de 2 anos, também atuo
          como Freelancer.
          <br/>
          Minha carreira iniciou-se na música, fui Professor de Piano
          e Canto por durante 6 anos, até finalmente responder a minha
          paixão por tecnlogia e migrar de carreira. Hoje dedico 100%
          do meu tempo nisso e amo o que faço.
        </p>
        <Button>
          <Link href="/">
            <a title="Currículo">
              <span>Currículo</span>
              <IoDocumentTextOutline />
            </a>
          </Link>
        </Button>
      </div>
    </section>
  )
}