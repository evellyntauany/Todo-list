import { FormEvent, useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { Card } from './Card'
import styles from './Task.module.css'

export function Task() {
  const [created, setCreated] = useState(0)
  const [completed, setCompleted] = useState(0)
  const [valueCard, setValueCard] = useState('');

  function handleCreateCard(event: FormEvent) {
    event.preventDefault()
    const newText = event.target.inputText.value
    setValueCard([...valueCard, newText])

    const creadedSun = created+1
      setCreated(creadedSun)
  }

  return (
    <>
      <form onSubmit={handleCreateCard} className="container">
        <Input name="inputText" placeholder="Adicione uma nova tarefa" />
        <Button type="submit" label="Criar" />
      </form>

      <aside className={styles.container}>
        <div className={styles.infos}>
          <p>
            Tarefas criadas <strong>{created}</strong>
          </p>
          <p>
            Concluidas <span>{completed}</span>
          </p>
        </div>

        <div className={styles.cardList}>
          {valueCard.length > 0 ? (
            valueCard.map((value) => {
              return <Card content={value} />
            })
          ) : (
            <div className={styles.task}>
              <strong>Voce ainda nao tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}

