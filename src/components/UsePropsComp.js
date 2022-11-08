import UseProps from "./UseProps"
import {posts} from '../posts'

  
    // const title = "natus nisi omnis corporis facere molestiae rerum in"
    // const url = "https://via.placeholder.com/600/f66b97"
  
const UsePropsComp = () => {
  return (
    <ul>
      {posts.map(post => (
        <UseProps key={post.id} {...post}>
          <p>Lorem ipsum dolor sit amet.</p>
        </UseProps>
      ))}
    </ul>
  )
}

export default UsePropsComp