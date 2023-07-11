import { Header } from './components/Header'
import { Task } from './components/Task'
import './global.css'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="containerNav">
        <Task />
      </div>
    </>
  )
}

export default App
