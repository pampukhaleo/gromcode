import React from "react";
import Message from "./Message.jsx";

const text1 = 'Hello, world!'
const text2 = 'Another exciting text.'

class Page extends React.Component {
  state = {
    text: null
  }

  handleTextBtn = text => {
    this.setState({
      text
    })
  }

  handleClear = () => {
    this.setState({
      text: null,
    })
  }

  render() {
    return (
      <div className="page">
        <Message text={this.state.text}/>
        <div className="actions">
          <button className="btn" onClick={() => this.handleTextBtn(text1)}>
            Text 1
          </button>
          <button className="btn" onClick={() => this.handleTextBtn(text2)}>
            Text 2
          </button>
          <button className="btn" onClick={this.handleClear}>
            Clear
          </button>
        </div>
      </div>
    )
  }
}

export default Page;