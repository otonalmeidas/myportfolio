import styles from './styles.module.scss'

export function Message(props) {
  return (
    <div className={styles.message}>
      <div className={styles.message__line} />
      <h4 className={styles.message__title}>{props.title}</h4>
      <span className={styles.message__date}>{props.date}</span>
      <p className={styles.message__description}>{props.description}</p>
    </div>
  )
}