import React from "react";
import Status from "./Status.jsx";

class App extends React.Component {
  state = {
    isOnline: false
  }

  handleStatus = () => {
    this.setState({
      isOnline: !this.state.isOnline
    })
  }

  render() {
    return (
      <>
        <Status unreadMessages={[]} isOnline={this.state.isOnline} handleStatus={this.handleStatus}/>
      </>
    )
  }
}

export default App;