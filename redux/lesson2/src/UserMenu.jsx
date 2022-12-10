import React, { Component } from 'react';

class UserMenu extends Component {
  render() {
    return (
      <div className="menu">
        <span className="menu__greeting">Hello, Nikola Tesla</span>
        <img
          alt="User Avatar"
          src="https://avatars3.githubusercontent.com/u10001"
          className="menu__avatar"
        />
      </div>
    );
  }
}

export default UserMenu;
