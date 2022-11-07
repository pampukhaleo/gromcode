import React from "react";
import UserMenu from "./UserMenu.jsx";
import UserProfile from "./UserProfile.jsx";

class App extends React.Component {
  state = {
    userData: null
  }

  componentDidMount() {
    this.fetchUser(this.props.userId)
  }

  fetchUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => {
        this.setState({userData})
      })
  }

  render() {
    if (!this.state.userData) {
      return null
    }
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData}/>
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    )
  }
}

export default App;