import React, { Component } from 'react';
import Stars from './Stars';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stars starsNumber={5} />
      </div>
    )
  }
}

export default App;
