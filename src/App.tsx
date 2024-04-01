import { Header } from './components/Header'
import { Task } from './components/Task'
import './global.css'
import './App.css'
import { CardContextProviderProps } from './contexts/card.context'

function App() {
  return (
    <>
    <CardContextProviderProps>
      <Header />
      <div className="containerNav">
        <Task />
      </div>
      </CardContextProviderProps>
    </>
  )
}

export default App
