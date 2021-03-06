import React from "react"
import './search.styles.scss'

export class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidUpdate() {
    const searchBoxId = document.getElementById('searchBox');
    this.props.filterUsers.length === 0 ?
      searchBoxId !== '' ?
        searchBoxId.disabled = false
        : searchBoxId.disabled = true
      : console.log('');
      this.props.filterUsers.length === 0 ? searchBoxId !== '' ? document.getElementById('searchBox').placeholder = 'search jobs': console.log(''):console.log('');

  }

  render() {
    return (
      <input
        id="searchBox"
        className="search"
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.handleChange}
      />
    );
  }
}