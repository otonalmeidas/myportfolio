import styles from './styles.module.scss'

export function Name() {
  const name = ['t', 'o', 'n', '', 'a', 'l', 'm', 'e', 'i', 'd', 'a']

  return (
    <h1 className={styles.name}>
      <span className={styles.name__complete}>Ton<br />Almeida</span>
      {name.map((item, index) => {
        return (
          <span className={styles.name__letter} key={index}>{item}</span>
        )
      })}
    </h1>
  )
}