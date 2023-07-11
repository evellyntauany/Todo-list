import { Trash } from 'phosphor-react'
import styles from './Card.module.css'

interface PropsCard {
  content: string
  onDeleteCard: (content: string) => void
}

export function Card({ content, onDeleteCard }: PropsCard) {
  function handleDeleteCard() {
    onDeleteCard(content)
  }
  return (
    <div className={styles.container}>
      <label>
        <input type="checkbox" />
        {content}
      </label>
      <button onClick={handleDeleteCard}>
        <Trash size={20} />
      </button>
    </div>
  )
}
