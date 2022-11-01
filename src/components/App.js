import React, { useState } from "react";
import Inputfield from "./Inputfield";
import ResourceList from "./ResourceList";
import ThumbNails from "./ThumbNails";
import Users from "./Users";

const App = () => {
  const [resourceName, setResourceName] = useState('posts')

  return (
    <>
      {/* <h5>Photos</h5> */}
      <Inputfield />
      <ThumbNails />
      <Users/>
      <button onClick={() => setResourceName ('posts')}>Posts</button>
      <button onClick={() => setResourceName ('todos')}>Todos</button>
      <ResourceList resourceName={resourceName}/>
    </>
  )

}

export default App