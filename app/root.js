import React, { Component } from 'react';
import Canvas from './Canvas';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Canvas />
      </div>
    );
  }
}

export default App;
