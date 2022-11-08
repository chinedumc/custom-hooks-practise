import { useState } from "react"

const UseStateBasic = () => {

  const [text, setText] = useState('Hello')
  
const changeTextHandler = () => {
  if(text === 'Hello'){
  setText('Goodbye')
  } else setText('Hello')
}

const [givenNumber, setGivenNumber] = useState(0)

const incrementer = () => {
  setGivenNumber(givenNumber+10)
}

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={changeTextHandler}>Change Text</button>

      <h2>{givenNumber}</h2>
      <button onClick={incrementer}>+</button>
    </div>
  )
}

export default UseStateBasic