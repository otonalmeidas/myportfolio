import Link from 'next/link'

import { BsArrowUpRight } from 'react-icons/bs'

import styles from './styles.module.scss'

export function Card(props) {
  return (
    <Link href={props.link}>
      <a className={styles.card} target="_blank" rel="noopener noreferrer">
        <span className={styles.card__alert}>Indisponível</span>
        <div className={styles.card__logos}>
          {props.children}
        </div>
        <div className={styles.card__content}>
          <h3 className={styles.card__title}>{props.title}</h3>
          <p className={styles.card__paragraph}>{props.paragraph}</p>
        </div>
        <div className={styles.card__footer}>
          <span className={styles.card__acess}>Ver projeto</span>
          <BsArrowUpRight />
        </div>
      </a>
    </Link>
  )
}