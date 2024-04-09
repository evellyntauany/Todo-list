import { createContext, ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CardType } from './uteis';

interface CardContextType {
  createdCard: (event: React.FormEvent<HTMLFormElement>) => void
  completedCard: (checked:boolean) => void
  deleteCard: (card: string) => void
  inputText:string
  handleChange:(event: React.ChangeEvent<HTMLInputElement>)=> void 
  completed:number
  created:number
  cards:CardType[]
}

export const CardContext = createContext({} as CardContextType)

interface CardContextProviderProps {
  children: ReactNode
}
export function CardContextProviderProps({
  children,
}: CardContextProviderProps) {

  const [cards, setValueCards] = useState<CardType[]>([]);
  const [inputText, setInputText] = useState('');
  const [created, setCreated] = useState(0)
  const [completed, setCompleted] = useState(0)

  function createdCard (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (inputText.trim() === '') return;
    const novoCard = {
      id: uuidv4(),
      value:inputText,
    };
    setValueCards([...cards, novoCard]);
    setCreated(prevState => prevState+1)
    setInputText('');
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.target.value)
  };

  function completedCard(checked:boolean){
    if(!checked) setCompleted(prevState => prevState-1)
    if(checked) setCompleted(prevState => prevState+1)
  }
  function deleteCard(cardToDelete: string){
    setValueCards(cards.filter(item => item.id !== cardToDelete ))
    setCompleted(prevState => prevState-1)
  }


  return (
    <CardContext.Provider
      value={{
        createdCard,
        completedCard,
        handleChange,
        deleteCard,
        inputText,
        completed,
        created,
        cards,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}