import { Check, Trash } from 'phosphor-react'
import styles from './Card.module.css'
import { ChangeEvent, useContext, useState } from 'react'
import { CardContext } from '../contexts/card.context'

interface PropsCard {
  content: string
 
}

export function Card({ content}: PropsCard) {
  const [checked, setChecked] = useState(Boolean)

  const {
    completedCard,
    deleteCard,
  } = useContext(CardContext)





  function handleChangeCheck(event: React.ChangeEvent<HTMLInputElement>){
   completedCard(event.target.checked)
  }
 

  return (
    <div className={styles.container}>
      <label className={checked ? styles.checked : ''} >
        <input  type="checkbox" onChange={handleChangeCheck} />
        {content}
      </label>
      <button >
        <Trash className={styles.icon} size={20} />
      </button>
    </div>
  )
}
