import {Component} from 'react'
import './index.css'
import ListItem from './ListItems'

class HistoryItems extends Component {
  state = {
    listDetails: [], // Initialize state with an empty array
  }

  componentDidMount() {
    // Assuming listItems is coming from props
    const {listItems} = this.props
    // Update state with listItems from props
    this.setState({listDetails: listItems})
  }

  deleteNotification = id => {
    const {listDetails} = this.state

    const filtered = listDetails.filter(eachItem => eachItem.id !== id)

    this.setState({listDetails: filtered})
  }

  render() {
    const {listDetails} = this.state

    return (
      <div className="bg-container">
        <div className="nav-bar">
          <img
            alt="history"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-image"
          />
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
            />
            <span className="input-group-addon">
              <img
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
            </span>
          </div>
        </div>
        <div className="page-container">
          <ul className="page-list">
            {listDetails.map(eachItem => (
              <ListItem
                listDetails={eachItem}
                key={eachItem.id}
                deleteNotification={this.deleteNotification}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default HistoryItems
