import ReactDOM from 'react-dom';
import React from 'react';
import _ from 'lodash'

const Stars = (props) => {
  const star_number = _.range(1, Math.floor(Math.random()*9))

  return (
    <div className="col-5">
      {
        star_number.map((i) =>
          <i key={i} className="fa fa-star fa-2x"></i>
        )
      }
    </div>
  )
}

const Button = (props) => {
  return (
    <div ClassName="col-2">
      <button>=</button>
    </div>
  );
}

const Answer = (props) => {
  return (
    <div className="col-5">
      ...
    </div>
  );
}

const Numbers = (props) => {
  const array_number = _.range(1, 9)
  return (
    <div className="card text-center">
      <div>
        {array_number.map((i) => <span key={i}>{i}</span>)}
      </div>
    </div>
  );
}

class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <Numbers />
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
