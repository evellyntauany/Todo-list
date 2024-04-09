import { Check, Trash } from 'phosphor-react'
import styles from './Card.module.css'
import { ChangeEvent, useContext, useState } from 'react'
import { CardContext } from '../contexts/card.context'
import { CardType } from '../contexts/uteis'


export function Card({ id, value}: CardType) {
  const [checked, setChecked] = useState(Boolean)

  const {
    completedCard,
    deleteCard
  } = useContext(CardContext)

  function handleChangeCheck(event: React.ChangeEvent<HTMLInputElement>){
   completedCard(event.target.checked)
   setChecked(event.target.checked)
  }
 

  return (
    
    <div className={styles.container}>
      <label className={checked ? styles.checked : ''} >
        <input type="checkbox" onChange={handleChangeCheck} />
        {value}
      </label>
      <button>
        <Trash onClick={()=>deleteCard(id)} className={styles.icon} size={20} />
      </button>
    </div>
  )
}
