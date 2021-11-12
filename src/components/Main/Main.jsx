import { Portfolio } from '../Portfolio/Portfolio'
import { Action } from '../Action/Action'
import { About } from '../About/About'

import styles from './styles.module.scss'

export function Main() {
  return (
    <main className={styles.main}>
      <About />
      <Portfolio />
      <Action />
    </main>
  )
}