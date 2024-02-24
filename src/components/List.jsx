import React, { useState, useEffect } from 'react'
import axios from 'axios'

const List = () => {

  const [ listState, setListState ] = useState([])

  useEffect(() => {
    handlerRequest()
  }, []);

  const handlerRequest = async () => {
    const results = await axios.get('https://www.amiiboapi.com/api/amiibo/')
    console.log(results)
    setListState(results.data.amiibo)
  }

  return (
    <div>
        { listState.map((item)=> <div key={item.tail}>
          <p>
            {item.character}
          </p>
          <img src={item.image} alt="" />
        </div>) }
    </div>
  )
}

export default List