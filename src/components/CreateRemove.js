import { useState } from "react";
import { posts } from "../posts";

const CreateRemove = () => {

  const [titles, setTitles] = useState(posts)

  const removeItemHandler = (id) => {
    let newPosts = titles.filter((post) => post.id !== id)
    setTitles(newPosts)
  }

  return (
    <>
    {
      titles.map((post) => {
        const {	id,	title} = post
        return (
					<div key={id}>
						<h2>{title}</h2>
						<button onClick={() => removeItemHandler(id)}>Remove This Title</button>
					</div>
				);
      })
    }
    </>
  )
}

export default CreateRemove