import React from "react";
import Clock from "./Clock.jsx";

class App extends React.Component {
  state = {
    visible: true
  }

  hide = () => {
    this.setState({
      visible: !this.state.visible
    })
  }
  render() {
    console.log(this.state.visible)
    return (
      <>
        <button onClick={this.hide}>Hide world time</button>
        {this.state.visible &&
          <div>
            <Clock location={'London'} offset={0} visible/>
            <Clock location={'Kyiv'} offset={2} visible/>
            <Clock location={'New York'} offset={-5} visible/>
          </div>
        }

      </>

    )
  }
}

export default App;