import Typed from 'react-typed'

import styles from './styles.module.scss'

export function Office() {
  return (
    <h2 className={styles.office}>
      <Typed strings={[
        '&num;Front-End &num;UI Design',
        'Full-Stack Designer',
        'Front-End Developer']}
        typeSpeed={125}
      />
    </h2>
  )
}