import Link from 'next/link'

import { Dropright } from '../Dropright/Dropright'
import { Indicator } from '../Indicator/Indicator'
import { Header } from '../Header/Header'
import { Office } from '../Office/Office'
import { Social } from '../Social/Social'
import { Photo } from '../Photo/Photo'
import { Name } from '../Name/Name'

import styles from './styles.module.scss'

export function Hero() {
  return (
    <div className={styles.hero}>
      <Photo />
      <div className={styles.hero__content}>
        <Header />
        <div className={styles.hero__center}>
          <Name />
          <Office />
        </div>
        <div className={styles.hero__footer}>
          <img
            alt="Scroll"
            src="/scroll.png"
            className={styles.hero__scroll}
          />
          <div className={styles.hero__texts}>
            <Indicator/>
            <Social />
          </div>
        </div>
      </div>
      <Dropright />
    </div>
  )
}