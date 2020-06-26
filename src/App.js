import React, { useState, useEffect }  from 'react'
import Teacher from './components/Teacher'
import axios from 'axios'

function App () {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState('')
  // const array = useState(0)
  // const x = array[0]
  // const setX = array[1]

  async function getDog () {
    const response = await axios
      .get('https://dog.ceo/api/breeds/image/random')

    console.log('response.data test:', response.data)

    setImage(response.data.message)
  }

  function effect () { getDog() }  

  useEffect(effect, [])

  async function onClick () {
    setCount(count + 1)

    getDog()
  }

  const message = 'Goodbye'

  return <div>
    <img src={image} />
    this has been clicked this many times: {count}
    <button onClick={onClick}>Add</button>
    <h1>{message}</h1>
    <Teacher name='bruinsma' punctuation='!' />
    <Teacher name='david' punctuation='...' />
    <Teacher name='matias' punctuation='?' />
  </div>
}

export default App;
