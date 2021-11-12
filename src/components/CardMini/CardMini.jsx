import Link from 'next/link'

import { BsArrowUpRight } from 'react-icons/bs'

import styles from './styles.module.scss'

export function CardMini(props) {
  return (
    <Link href={props.link}>
      <a className={styles.card} target="_blank" rel="noopener noreferrer">
        <div className={styles.card__left}>
          {props.children}
          <h3 className={styles.card__title}>{props.title}</h3>
          <span className={styles.card__tag}>{props.tag}</span>
        </div>
        <BsArrowUpRight />
      </a>
    </Link>
  )
}