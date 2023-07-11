import { FormEvent, useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { Card } from './Card'
import styles from './Task.module.css'



export function Task() {
  const [created, setCreated] = useState(0)
  const [completed, setCompleted] = useState(0)
  const [valueCard, setValueCard] = useState([]);

  function handleCreateCard(event: FormEvent) {
    event.preventDefault()
    const newText = event.target.inputText.value
    setValueCard([...valueCard, newText])

    const creadedSun = created+1
      setCreated(creadedSun)
  }

  function completedCard(){
    const creadedSun = completed+1
    setCompleted(creadedSun)
  }

  function deleteCard(cardToDelete: string){
      const cardsWihtoutDeleted = valueCard.filter(item => {
          return  item!== cardToDelete
      })
      setValueCard(cardsWihtoutDeleted)
  }

  return (
    <>
      <form onSubmit={handleCreateCard} className={styles.container}>
        <Input name="inputText" placeholder="Adicione uma nova tarefa" />
        <Button type="submit" label="Criar" />
      </form>

      <aside className={styles.asideContainer} >
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
              return <Card key={value} onCompletedCard={completedCard} onDeleteCard={deleteCard} content={value} />
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

