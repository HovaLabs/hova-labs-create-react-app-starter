import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './design-system/theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <div>The App</div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
