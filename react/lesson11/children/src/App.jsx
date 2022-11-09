import React from "react";
import Dialog from "./Dialog.jsx";

class App extends React.Component {
  state = {
    isOpen: false
  }

  handleOpen = () => {
    this.setState({
      isOpen: true
    })
  }

  handleClose = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.handleOpen}>Show dialog</button>
        <Dialog title={'Recommendation'} isOpen={this.state.isOpen} onClose={this.handleClose}>
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    )
  }
}

export default App;