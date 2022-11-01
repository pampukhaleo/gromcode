import React from "react";

class Search extends React.Component {
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Search text: ${this.state.value}`)
  }

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input type="text" className="search__input" value={this.state.value} onChange={this.handleChange}/>
        <button className="search__button">Search</button>
      </form>
    )
  }
}

export default Search;