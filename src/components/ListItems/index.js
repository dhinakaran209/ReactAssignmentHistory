import './index.css'

const ListItem = props => {
  const {listDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listDetails

  return (
    <li className="card">
      <p>{timeAccessed}</p>

      <div className="name-and-domain">
        <img alt="logo" className="logo-size" src={logoUrl} />
        <div className="title-url">
          <p>{title}</p>
          <span>{domainUrl}</span>
        </div>
        <img
          className="delete"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </div>
    </li>
  )
}

export default ListItem
