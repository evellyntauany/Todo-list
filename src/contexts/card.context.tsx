import { createContext, ReactNode, useState } from 'react';

interface CardContextType {
  createdCard: (event: React.FormEvent<HTMLFormElement>) => void
  completedCard: (checked:boolean) => void
  deleteCard: (card: string) => void
  completed:number
}

export const CardContext = createContext({} as CardContextType)

interface CardContextProviderProps {
  children: ReactNode
}
export function CardContextProviderProps({
  children,
}: CardContextProviderProps) {

  const [cards, setValueCards] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');
  const [created, setCreated] = useState(0)
  const [completed, setCompleted] = useState(0)

  function createdCard (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (inputText.trim() === '') return;
    setValueCards([...cards, inputText]);
    setInputText('');
  }

  function completedCard(checked:boolean){
    if(!checked) setCompleted(prevState => prevState-1)
    if(checked) setCompleted(prevState => prevState+1)
  
    console.log(completed)
  }
  function deleteCard(cardToDelete: string){
    const cardsWihtoutDeleted = cards.filter(item => {
      return  item!== cardToDelete
  })}


  return (
    <CardContext.Provider
      value={{
        createdCard,
        completedCard,
        completed,
        deleteCard,
      
      }}
    >
      {children}
    </CardContext.Provider>
  )
}