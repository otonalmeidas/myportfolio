import styles from './styles.module.scss'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/">
      <a className={styles.logo} title="Logo">
        <span className={styles.logo__text} aria-hidden="true">Ton .</span>
        Ton .
        <span className={styles.logo__text} aria-hidden="true">Ton .</span>
      </a>
    </Link>
  )
}