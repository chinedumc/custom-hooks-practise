import useResources from "../customHooks/useResources"

const ThumbNails = () => {

  const photos = useResources('photos')
  return (
    <>
      {/* <button onClick={() => ('')}>Clear Links</button> */}
    <ul>
      {photos.map(photo => (
        <li key={photo.id}>
          {photo.thumbnailUrl}
        </li>
      ))}
    </ul>
      </>
  )
}

export default ThumbNails