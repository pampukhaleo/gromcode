import React, { Component } from 'react';
import ThemedButton from './ThemedButton.jsx';
import { theme, ThemeContext } from './theme-context';

class App extends Component {
  state = {
    themes: theme.light,
  };

  toggleTheme = () => {
    const newTheme = this.state.themes === theme.dark ? theme.light : theme.dark;
    this.setState({
      themes: newTheme,
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.themes}>
          <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>
        <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
      </div>
    );
  }
}

export default App;
