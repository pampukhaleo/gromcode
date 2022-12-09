import React, { Component } from 'react';
import ThemedButton from './ThemedButton.jsx';
import { themes, ThemesContext } from './themes-context';

class App extends Component {
  state = {
    theme: themes.light,
  };

  toggleTheme = () => {
    const newTheme = this.state.theme === themes.dark ? themes.light : themes.dark;
    this.setState({
      themes: newTheme,
    });
  };

  render() {
    return (
      <div>
        <ThemesContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>
        </ThemesContext.Provider>
        <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
      </div>
    );
  }
}

export default App;
