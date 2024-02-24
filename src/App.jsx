import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import ListaTareas from './components/ListaTareas'

function App() {
  const [count, setCount] = useState(0)
  const [ listState, setListState ] = useState([
    'leche', 'cereal', 'fruta', 'verduras', 'jabon'
  ])
  const [ inputValue, setInputValue ] = useState()

  const handlerClick = () => {
    setListState([
      ...listState,
      inputValue])
  }

  return (
    <>
      <div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  />
      <List lista={listState} />
      <button onClick={handlerClick}>
        Agregar
      </button> */}
      <ListaTareas />
      </div>
    </>
  )
}

export default App
