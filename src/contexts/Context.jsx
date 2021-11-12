import { createContext, useEffect, useState } from 'react'

export const Context = createContext({})

function ContextPovider({ children }) {
  const [message, setMessage] = useState(false)
  const [dropright, setDropright] = useState(false)
  
  function handleMessage() {
    setDropright(dropright ? false : true)

    if (dropright === false ) {
      document.body.style.overflow = 'hidden'
    } else (
      document.body.style.overflow = ''
    )

    if (message === false) {
      setMessage(true)
      localStorage.setItem('noMessage', 'True')
    }
  }

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem('noMessage')

      if(storageUser) {
        setMessage(true)
      }
    }

    loadStorage()

    function handleEsc(event) {
      if (event.keyCode === 27) {
        setDropright(false)
        document.body.style.overflow = ''
      }
    }
    
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return(
    <Context.Provider 
    value={{
      message,
      dropright,
      setDropright,
      handleMessage
    }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextPovider