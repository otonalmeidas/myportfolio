import Link from 'next/link'

import styles from './styles.module.scss'

export function Social() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__menu}>
        <li className={styles.nav__item}>
          <Link href="https://www.github.com/otonalmeidas">
            <a className={styles.nav__link} target="_blank" rel="noopener noreferrer" title="GitHub">GitHub</a>
          </Link>
        </li>
        <li className={styles.nav__bar}>/</li>
        <li className={styles.nav__item}>
          <Link href="https://www.linkedin.com/in/otonalmeidas">
            <a className={styles.nav__link} target="_blank" rel="noopener noreferrer" title="LinkedIn">LinkedIn</a>
          </Link>
        </li>
        <li className={styles.nav__bar}>/</li>
        <li className={styles.nav__item}>
          <Link href="https://www.codepen.io/otonalmeidas">
            <a className={styles.nav__link} target="_blank" rel="noopener noreferrer" title="Codepen">Codepen</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}