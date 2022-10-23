import React from "react";
import Offline from "./Offline.jsx";
import Online from "./Online.jsx";

class Status extends React.Component {
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
      <div>
        {this.state.isOnline
          ? <Online />
          : <Offline handleStatus={this.handleStatus} />
        }
      </div>
    )
  }
}

export default Status;