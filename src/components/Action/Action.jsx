import Link from 'next/link'

import { Title } from '../Title/Title'
import { Button } from '../Button/Button'

import { GiPizzaSlice } from 'react-icons/gi'

import styles from './styles.module.scss'

export function Action() {
  return (
    <section className={styles.action} id="contato">
      <div className={styles.action__grid}>
        <div />
        <div className={styles.action__right}>
          <Title index="03" one="Gostou do meu trabalho?" two="Fale comigo!" />
          <Button>
            <Link href="https://api.whatsapp.com/send?phone=5511960245642">
              <a title="Entre em contato" target="_blank" rel="noopener noreferrer">
                <span>Contato</span>
                <GiPizzaSlice />
              </a>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}