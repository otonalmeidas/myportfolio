import styles from './styles.module.scss'

export function Button(props) {
  return (
    <div className={styles.button}>
      {props.children}
    </div>
  )
}