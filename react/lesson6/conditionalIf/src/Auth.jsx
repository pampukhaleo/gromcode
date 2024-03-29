import React, { Component } from "react";
import Greeting from "./Greeting.jsx";
import Logout from "./Logout.jsx";
import Login from "./Login.jsx";

class Auth extends Component {
  state = {
    isLoggedIn: false,
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    return (
      <div className='panel'>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn
          ? <Logout onLogout={this.handleLogout} />
          : <Login onLogin={this.handleLogin} />}
      </div>
    )
  }
}

export default Auth;