import { Logo } from '../Logo/Logo'

import styles from './styles.module.scss'

export function Loading() {
  return (
    <div className={styles.loading}>
      <Logo />
    </div>
  )
}