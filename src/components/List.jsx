import React, { useState, useEffect } from 'react'

const List = ({lista}) => {

  useEffect(() => {
    console.log('aqui es el useEffect',lista)
  }, [lista]);

  return (
    <div>
      <ul>
        { lista.map((item)=> <li key={item}>{item}</li>) }
      </ul>
    </div>
  )
}

export default List