import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleMouseEnter = text => {
    this.setState({
      text,
    })
  }

  handleMouseLeave = () => {
    this.setState({
      text: ''
    })
  }


  render() {
    return (
      <div>
        <div className="picker__title">{this.state.text}</div>
        <div>
          <button className="picker__button picker__button_coral"
                  onMouseEnter={() => this.handleMouseEnter('Coral')}
                  onMouseLeave={this.handleMouseLeave}
          ></button>
          <button className="picker__button picker__button_aqua"
                  onMouseEnter={() => this.handleMouseEnter('Aqua')}
                  onMouseLeave={this.handleMouseLeave}
          ></button>
          <button className="picker__button picker__button_bisque"
                  onMouseEnter={() => this.handleMouseEnter('Bisque')}
                  onMouseLeave={this.handleMouseLeave}
          ></button>
        </div>
      </div>

    )
  }
}

export default ColorPicker;