// import { useState, useEffect } from "react";
// import axios from "axios";

// const UseProps = (props) => {
//   const [resources, setResources] = useState([]);

//   const fetchResponse = async () => {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts`
//     );
//     setResources(response.data);
//   }

//   useEffect(() => {
//     fetchResponse()
//   }, [])

//   return (
// 		<ul>
// 			{photos.map((photo) => (
// 				<li key={photo.id}>{photo.thumbnailUrl}</li>
// 			))}
// 		</ul>
// 	);
// }

// export default UseProps


const UseProps = ({url, title, children}) => {

  return (
    <article>
      <img src={url} alt='' onMouseOver={()=> console.log(title)}/>
      <h1>{title}</h1>
      {children}
    </article>
  )
}

export default UseProps