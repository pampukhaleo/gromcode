import React from "react";
import UserMenu from "./UserMenu.jsx";
import UserProfile from "./UserProfile.jsx";

class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    this.fetchUser(this.props.userId)
  }

  fetchUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({user: data})
      })
  }

  render() {
    if (!this.state.user) {
      return null
    }
    console.log(this.state.user)
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.user}/>
        </header>
        <UserProfile userData={this.state.user} />
      </div>
    )
  }
}

export default App;