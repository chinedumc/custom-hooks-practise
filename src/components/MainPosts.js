import { useState } from "react";
import ResourceList from "./ResourceList";

const MainPosts = () => {
  const [resourceName, setResourceName] = useState("posts");

return (
	<>
		<button onClick={() => setResourceName("posts")}>Posts</button>
		<button onClick={() => setResourceName("todos")}>Todos</button>
		<ResourceList resourceName={resourceName} />
	</>
);
}

export default MainPosts