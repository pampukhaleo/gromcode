import React from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

class Auth extends React.Component {
  state = {
    isOnline: false,
    isLoading: false
  }

  handleLogout = () => {
    this.setState({
      isOnline: false
    })
  }

  handleLogin = () => {
    this.setState({
      isLoading: true
    })

    setTimeout(() => {
      this.setState({
        isLoading: false,
        isOnline: true
      })
    }, 2000)
  }

  render() {
    return (
      this.state.isLoading
        ? <Spinner size={25}/>
        : this.state.isOnline
          ? <Logout onLogout={this.handleLogout} />
          : <Login onLogin={this.handleLogin} />
    )
  }
}

export default Auth;