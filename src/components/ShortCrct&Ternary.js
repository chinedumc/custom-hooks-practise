import { useState } from "react"


const ShortCrct_Ternary = () => {

  const [isLoading, setIsLoading] = useState(false)
  // const [pageIsLoaded, setPageIsLoaded] = useState('Pagessss')

  const ToggleHandler = () => {
    setIsLoading(!isLoading)		
  }

  return<>
  <div>
    {(!isLoading) && <h2>Loading...</h2>}
    {/* {(isLoading) && <h2>Page is Loaded</h2> } */}

    {(isLoading) ? <h2>Page is Loaded</h2> : ''}
  </div>

  <button onClick={ToggleHandler}>Toggle</button>
  </>
}

export default ShortCrct_Ternary