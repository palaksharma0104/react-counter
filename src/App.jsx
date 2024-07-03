import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);

  }

  const removeValue = () => {
    setCounter((counter) => counter - 1 );
    setCounter((counter) => counter - 1 );
  }

  return(
    <>
    <h1> its a counter</h1>
    <h2> counter: {counter}</h2>
    <button onClick={addValue} id = "btn"> Add Value! </button>
    <button onClick={removeValue} id = 'btn'> Remove Value!  </button>
    <h3> happy counting hehe</h3>
    </>
  )
}

export default App