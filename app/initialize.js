import ReactDOM from 'react-dom';
import React from 'react';
import _ from 'lodash';

const Stars = (props) => {
  return (
    <div className="col-5">
      {
        props.starNumber.map((i) =>
          <i key={i} className="fa fa-star fa-2x"></i>
        )
      }
    </div>
  )
}

const Button = (props) => {
  return (
    <div className="col-2">
      <button disabled={props.selectedNumbers.length === 0}>
        =
      </button>
    </div>
  );
}

const Answer = (props) => {
  return (
    <div className="col-5">
      {props.selectedNumbers.map((number, i) =>
        <span key={i}
              onClick={() => props.unselectNumber(number)}>
          {number}
        </span>
      )}
    </div>
  );
}

const Numbers = (props) => {
  const number_property = (number) => {
    if (props.selectedNumbers.includes(number)) {
      return  'selected'
    }
  }

  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number) =>
          <span
            key={number}
            className={number_property(number)}
            onClick={() => props.selectNumber(number)}
            >
              {number}
          </span>
        )}
      </div>
    </div>
  );
}

Numbers.list = _.range(1, 10)

class Game extends React.Component {
  state = {
    selectedNumbers: [],
    starsNumber: _.range(1, Math.floor(Math.random()*9))
  };

  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.includes(clickedNumber)) { return }

    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  };

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
     selectedNumbers: prevState
                        .selectedNumbers
                        .filter(number => number !== clickedNumber)
    }))
  };

  render() {
    const { starsNumber, selectedNumbers } = this.state
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars starNumber={starsNumber}/>
          <Button selectedNumbers={selectedNumbers}/>
          <Answer selectedNumbers={selectedNumbers}
                  unselectNumber={this.unselectNumber}
            />
        </div>
        <Numbers
          selectedNumbers={selectedNumbers}
          selectNumber={this.selectNumber}
          />
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
