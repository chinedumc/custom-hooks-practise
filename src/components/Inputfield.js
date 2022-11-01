import { useEffect, useRef } from "react"

const Inputfield = () => {
  const InputRef = useRef(null)

  useEffect(() => {
    InputRef.current.focus()
  },  [])

  return (
    <div>
      <input ref={InputRef} type="text" />
    </div>
  )
}

export default Inputfield