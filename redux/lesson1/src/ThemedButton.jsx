import React, { Component } from 'react';
import { ThemesContext } from './themes-context';

class ThemedButton extends Component {
  render() {
    return (
      <button
        {...this.props}
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
        className="btn"
      />
    );
  }
}

ThemedButton.contextType = ThemesContext;

export default ThemedButton;
