import Link from 'next/link'

import { Button } from '../Button/Button'

import { BsArrowUpRight } from 'react-icons/bs'

import styles from './styles.module.scss'

export function ErrorPage() {
  return (
    <main className={styles.error}>
      <div className={styles.error__top}>
        <h1 className={styles.error__title}>404.</h1>
        <h2 className={styles.error__subtitle}>Ooops!</h2>
      </div>
      <div className={styles.error__action}>
        <span className={styles.error__text}>Não há nada aqui</span>
        <Button>
          <Link href="/">
            <a title="Página inicial">
              <span>Voltar</span>
              <BsArrowUpRight />
            </a>
          </Link>
        </Button>
      </div>
    </main>
  )
}