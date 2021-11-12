import Link from 'next/link'
import { useContext } from 'react'

import { Context } from '../../contexts/Context'
import { GiPaperPlane } from 'react-icons/gi'
import { Logo } from '../Logo/Logo'

import styles from './styles.module.scss'

export function Header() {
  const { message, handleMessage } = useContext(Context)

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo />
        <div className={styles.header__right}>
          <Link href="mailto:otonalmeidas@hotmail.com">
            <a className={styles.header__contact} title="Meu e-mail">
              otonalmeidas@hotmail.com
            </a>
          </Link>
          <button
            onClick={handleMessage}
            className={styles.header__message}
            title="Mensagens"
          >
            <GiPaperPlane />
            {
              message ?
              <div className={styles.header__notified} />
              :
              <div className={styles.header__notifying} />
            }
          </button>
        </div>
      </div>
    </header>
  )
}