import { Check, Trash } from 'phosphor-react'
import styles from './Card.module.css'
import { ChangeEvent, useState } from 'react'

interface PropsCard {
  content: string
  onDeleteCard: (content: string) => void
  onCompletedCard:()=>void
}

export function Card({ content, onDeleteCard, onCompletedCard }: PropsCard) {
  const [checked, setChecked] = useState(Boolean)


  function handleDeleteCard() {
    onDeleteCard(content)
  }
  function handleCompletedCard() {
    onCompletedCard()
  }


  function handleChangeCheck(event: React.ChangeEvent<HTMLInputElement>){
   setChecked(event.target.checked);
  }

  return (
    <div className={styles.container}>
      <label className={checked ? styles.checked : ''} >
        <input onClick={handleCompletedCard} type="checkbox" onChange={handleChangeCheck} />
        {content}
      </label>
      <button onClick={handleDeleteCard}>
        <Trash className={styles.icon} size={20} />
      </button>
    </div>
  )
}
