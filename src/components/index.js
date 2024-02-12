import {Component} from 'react'
import './index.css'
import ListItem from './ListItems'

class HistoryItems extends Component {
  state = {
    listDetails: [],
    searchInput: '',
  }

  componentDidMount() {
    // Assuming listItems is coming from props
    const {listItems} = this.props
    // Update state with listItems from props
    this.setState({listDetails: listItems})
  }

  searchHistory = event => {
    const {listDetails} = this.state
    const search = event.target.value

    this.setState({searchInput: search})

    const finalList = listDetails.filter(eachItem =>
      eachItem.title.toLowerCase().includes(search.toLowerCase()),
    )
    this.setState({listDetails: finalList})
  }

  deleteNotification = id => {
    const {listDetails, searchInput} = this.state

    const filtered = listDetails.filter(eachItem => eachItem.id !== id)

    this.setState({listDetails: filtered})
  }

  blankPage = () => {
    const {listDetails} = this.state

    if (listDetails.length > 0) {
      return listDetails.map(eachItem => (
        <ListItem
          listDetails={eachItem}
          key={eachItem.id}
          deleteNotification={this.deleteNotification}
        />
      ))
    }

    return <p>There is no history to show</p>
  }

  render() {
    const {listDetails} = this.state

    return (
      <div className="bg-container">
        <div className="nav-bar">
          <img
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-image"
          />
          <div className="input-group">
            <input
              onChange={this.searchHistory}
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
          <ul className="page-list">{this.blankPage()}</ul>
        </div>
      </div>
    )
  }
}

export default HistoryItems
