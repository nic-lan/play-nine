import ReactDOM from 'react-dom';
import React from 'react';

const Stars = (props) => {
  return (
    <div>
      ...
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button>=</button>
    </div>
  );
}

const Answer = (props) => {
  return (
    <div>
      ...
    </div>
  );
}

export class Game extends React.Component {
  render() {
    return (
      <div>
        <h3>Play Nine</h3>
      </div>
    );
  }
}

export class App extends React.Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
});
