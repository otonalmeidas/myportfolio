import styles from './styles.module.scss'

export function Title(props) {
  return (
    <div className={styles.title}>
      <div className={styles.title__header}>
        <div className={styles.title__line} />
        <span className={styles.title__number}>{props.index}</span>
      </div>
      <div className={styles.title__texts}>
        <h3 className={styles.title__subtitle}>{props.one}</h3>
        <h2 className={styles.title__title}>{props.two}</h2>
      </div>
    </div>
  )
}