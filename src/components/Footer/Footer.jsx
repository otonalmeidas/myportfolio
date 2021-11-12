import Link from 'next/link'
import { Logo } from '../Logo/Logo'

import {
  FaCodepen,
  FaGithubAlt,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'

import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__copy}>
          <Logo />
          <span className={styles.footer__text}>
            Design &amp; Build<br />By Ton Almeida
          </span>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.nav__menu}>
            <li className={styles.nav__item}>
              <Link href="/">
                <a className={styles.nav__link}>
                  Topo
                </a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="#sobre">
                <a className={styles.nav__link}>
                  Sobre
                </a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="#portfolio">
                <a className={styles.nav__link}>
                  Portfólio
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.footer__contact}>
          <ul className={styles.footer__menu}>
            <li className={styles.footer__item}>
              <Link href="https://www.github.com/otonalmeidas">
                <a className={styles.footer__link} target="_blank" rel="noopener noreferrer">
                  <FaGithubAlt />
                </a>
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="https://www.linkedin.com/in/otonalmeidas">
                <a className={styles.footer__link} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="https://www.codepen.io/otonalmeidas">
                <a className={styles.footer__link} target="_blank" rel="noopener noreferrer">
                  <FaCodepen />
                </a>
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="https://www.instagram.com/otonalmeidas">
                <a className={styles.footer__link} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </Link>
            </li>
          </ul>
          <span className={styles.footer__text}>
            @otonalmeidas
            <br />
            São Paulo, SP
          </span>
        </div>
      </div>
    </footer>
  )
}