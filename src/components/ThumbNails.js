import useResources from "../customHooks/useResources"


const ThumbNails = () => {
  const photos = useResources('photos')
  return (
    <ul>
      {photos.map(photo => (
        <li key={photo.id}>
          {photo.thumbnailUrl}
        </li>
      ))}
    
    </ul>
  )
}

export default ThumbNails