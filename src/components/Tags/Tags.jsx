import styles from './styles.module.scss'

export function Tags() {
  return (
    <div className={styles.tags}>
      <div className={styles.tags__tag}>
        <span className={styles.tags__text}>Front-End</span>
      </div>
      <div className={styles.tags__tag}>
        <span className={styles.tags__text}>UI Design</span>
      </div>
      <div className={styles.tags__tag}>
        <span className={styles.tags__text}>Sass</span>
      </div>
      <div className={styles.tags__tag}>
        <span className={styles.tags__text}>Tailwind</span>
      </div>
      <div className={styles.tags__tag}>
        <span className={styles.tags__text}>JavaScript</span>
      </div>
      <div className={styles.tags__tag}>
        <span className={styles.tags__text}>ES6</span>
      </div>
      <div className={styles.tags__tag}>
        <span className={styles.tags__text}>React</span>
      </div>
      <div className={styles.tags__tag}>
        <span className={styles.tags__text}>Hooks</span>
      </div>
      <div className={styles.tags__tag}>
        <span className={styles.tags__text}>Redux</span>
      </div>
      <div className={styles.tags__tag}>
        <span className={styles.tags__text}>TypeScript</span>
      </div>
      <div className={styles.tags__tag}>
        <span className={styles.tags__text}>Firebase</span>
      </div>
    </div>
  )
}