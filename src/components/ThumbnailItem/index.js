import './index.css'

const ThumbnaillItem = props => {
  const {imageDetails, isActive, getActiveThumbId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? 'active' : 'inactive'

  const onClickThumbnail = () => {
    getActiveThumbId(id)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnaillItem
