import React from "react";

class Life extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state')
    this.state = {
      number: Math.round(Math.random() * 100)
    }
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render')
    return true
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed')
  }

  show = () => {
    this.setState({
      visible: true
    })
  }

  hide = () => {
    this.setState({
      visible: false
    })
  }

  update = () => {
    this.setState({
      number: Math.round(Math.random() * 100)
    })
  }

  render() {
    console.log('return React element to build DOM')
    return (
      <div>
        <div>
          <button onClick={this.show}>Show</button>
          <button onClick={this.hide}>Hide</button>
          <button onClick={this.update}>Update</button>
        </div>
        {this.state.visible && <div>{this.state.number}</div>}
      </div>
    )
  }
}

export default Life;