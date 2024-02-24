import React, { useState } from 'react'
import './styles.css'

const ListaTareas = () => {
  const [ todos, setTodos ] = useState([])
  const [ inputValue, setInputValue ] = useState([])


  const handlerClick = () => {
    setTodos([
      ...todos,
      {
        task: inputValue,
        completed: false
      }
    ])
    setInputValue('')
  }

  return (
    <div>

      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handlerClick}>
        Agregar tarea
      </button>

      <ul>
        {
          todos.map((item, i) => ( <li key={i} className={item.completed ? 'completed' : 'not-completed'}  >{item.task}</li> ))
        }
      </ul>

    </div>
  )
}

export default ListaTareas