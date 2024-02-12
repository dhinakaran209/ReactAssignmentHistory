import './index.css'

const ListItem = props => {
  const {listDetails, deleteNotification} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listDetails

  const deleteItem = () => {
    deleteNotification(id)
  }

  return (
    <li className="card">
      <p>{timeAccessed}</p>

      <div className="name-and-domain">
        <img alt="logo" className="logo-size" src={logoUrl} />
        <div className="title-url">
          <p>{title}</p>
          <span>{domainUrl}</span>
        </div>
        <button onClick={deleteItem}>
          <img
            className="delete"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default ListItem
