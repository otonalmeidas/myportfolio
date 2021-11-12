import styles from './styles.module.scss'

export function Photo() {
  return (
    <div className={styles.image}>
      <img src="photo.png" alt="Foto de Wellington" />
    </div>
  )
}