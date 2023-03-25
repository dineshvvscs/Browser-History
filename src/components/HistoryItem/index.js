import './index.css'

const HistoryItem = props => {
  const {details, onDeleteFunction} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details
  const onDeleteElement = () => {
    onDeleteFunction(id)
  }
  return (
    <li className="listTopContainer">
      <p className="time">{timeAccessed}</p>
      <div className="historyContainer">
        <img className="historyImage" src={logoUrl} alt="domain logo" />
        <div className="imagesAndHistory">
          <div className="nameUrl">
            <p className="titleName">{title}</p>
            <p>{domainUrl}</p>
          </div>
          <div className="deleteContainer">
            <button
              onClick={onDeleteElement}
              type="button"
              className="delete-button"
              data-testid="delete"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
