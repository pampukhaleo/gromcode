import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    }
  }

  handleCLick = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    const isOff = this.state.toggle
    let btnText = isOff ? 'On' : 'Off'
    return (
      <div className="toggler" onClick={this.handleCLick}>{btnText}</div>
    )
  }
}

export default Toggler;