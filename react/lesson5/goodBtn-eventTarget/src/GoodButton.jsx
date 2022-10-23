import React, { Component } from "react";

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

class GoodButton extends Component {

  handleClick = (e) => {
    alert(e.target.textContent)
  }

  render() {
    return (
      <button className='fancy-button' onClick={this.handleClick}>CLick</button>
    )
  }
}

export default GoodButton;