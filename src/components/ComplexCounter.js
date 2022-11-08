import { useState } from "react"


const ComplexCounter = () => {

  const [value, setValue] = useState(0)

  const IncrementHandler = () => {
      setTimeout(() => {
        // setValue(value + 1)
        setValue((preValue) =>preValue + 1)
      }, 5000)
    
  }

  return (
  <section>
    <h1>{value}</h1>
    <button onClick={IncrementHandler}>Increase After Set Time</button>
  </section>
  )
}

export default ComplexCounter