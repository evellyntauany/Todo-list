import {  useContext, useEffect, useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { Card } from './Card'
import styles from './Task.module.css'
import Clipboard from '../assets/Clipboard.svg';
import { CardContext } from '../contexts/card.context'



export function Task() {
  const {
    completed,
  } = useContext(CardContext)


  const [created, setCreated] = useState(0)

  const [cards, setValueCards] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');

  const creadedSun = created

  const handleCreateCard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputText.trim() === '') return;
    setValueCards([...cards, inputText]);
    setInputText('');


    setCreated(creadedSun+1)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.target.value)
  };


 



  return (
    <>
      <form onSubmit={handleCreateCard} className={styles.container}>
        <Input onChange={handleChange} value={inputText} placeholder="Adicione uma nova tarefa" />
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
          {cards.length > 0 ? (
            cards.map((value) => {
              return <Card key={value}  content={value} />
            })
          ) : (
            <div className={styles.task}>
              <img src={Clipboard}/>
              <strong>Voce ainda nao tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}

