import Link from 'next/link'

import styles from './styles.module.scss'

export function Indicator() {
  const getDate = new Date().getHours()
  
  if(getDate >= 7 && getDate <= 23) {
    return (
      <Link href="https://api.whatsapp.com/send?phone=5511960245642">
        <a className={styles.indicator} target="_blank" rel="noopener noreferrer" title="Contato">
          <span className={styles.indicator__text}>Disponível</span>
          <div className={styles.indicator__led} />
        </a>
      </Link>
    )
  }

  return (
    <Link href="mailto:otonalmeidas@hotmail.com">
      <a className={styles.indicator} target="_blank" rel="noopener noreferrer" title="Contato">
        <span className={styles.indicator__text}>Não disponível</span>
        <div className={styles.indicator__led__disabled} />
      </a>
    </Link>
  )
}