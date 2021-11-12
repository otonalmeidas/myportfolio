import { useContext } from 'react'
import { Context } from '../../contexts/Context'

import { Messages } from '../Message/Messages'
import { Message } from '../Message/Message'

import { BsXLg } from 'react-icons/bs'

import styles from './styles.module.scss'

export function Dropright() {
  const { dropright, handleMessage } = useContext(Context)

  return (
    <div className={dropright ? styles.dropright__show : styles.dropright}>
      <button className={styles.dropright__button} onClick={handleMessage} title="Fechar">
        <BsXLg />
      </button>
      <h3 className={styles.dropright__title}>Mensagens</h3>

      {Messages.map((item, index) => {
        return (
          <Message
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
          />
        )
      })}
    </div>
  )
}