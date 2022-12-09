import React, { Component } from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends Component {
  render() {
    return (
      <button
        {...this.props}
        style={{
          background: this.context.background,
          color: this.context.fontColor,
        }}
        className="btn"
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
