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
  let button

  switch (props.answerIsCorrect) {
    case true:
      button = <button className="btn btn-success">
        <i className="fa fa-check"></i>
      </button>
      break;

    case false:
      button = <button className="btn btn-danger">
        <i className="fa fa-times"></i>
      </button>
      break;

    default:
      button =
        <button className="btn"
                onClick={props.checkAnswer}
                disabled={props.selectedNumbers.length === 0}
                >
          =
        </button>
  }

  return (
    <div className="col-2">
      {button}
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
    if (props.selectedNumbers.includes(number) || props.usedNumbers.includes(number)) {
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
    starsNumber: _.range(1, Math.floor(Math.random()*9)),
    answerIsCorrect: null,
    usedNumbers: []
  };

  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.includes(clickedNumber)) { return }

    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber),
      answerIsCorrect: null
    }))
  };

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers
                                .filter(number => number !== clickedNumber),
      answerIsCorrect: null
    }))
  };

  useSelectedNumbers = (currentSelectedNumbers, currentUsedNumber, answerIsCorrect) => {
    if (answerIsCorrect) {
      return currentUsedNumber.concat(currentSelectedNumbers);
    }
    else {
      return currentUsedNumber;
    };
  };

  keep_or_rerun_stars = (current_stars_number, answerIsCorrect) => {
    if (answerIsCorrect) {
      return _.range(1, Math.floor(Math.random()*9));
    }
    else {
      return current_stars_number;
    };
  }

  freeSelectedNumbers = (currentSelectedNumbers, answerIsCorrect) => {
    if (answerIsCorrect) {
      return [];
    }
    else {
      return currentSelectedNumbers;
    };
  }

  checkAnswer = () => {
    const answerIsCorrect = this.state.starsNumber.length === this.state.selectedNumbers.reduce((a, b) => a + b, 0)

    this.setState(prevState => ({
      answerIsCorrect: answerIsCorrect,
      starsNumber: this.keep_or_rerun_stars(prevState.starsNumber, answerIsCorrect),
      usedNumbers: this.useSelectedNumbers(prevState.selectedNumbers, prevState.usedNumbers, answerIsCorrect),
      selectedNumbers: this.freeSelectedNumbers(prevState.selectedNumbers, answerIsCorrect)
    }))
  };

  render() {
    const { starsNumber, selectedNumbers, answerIsCorrect, usedNumbers } = this.state
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars starNumber={starsNumber}/>
          <Button selectedNumbers={selectedNumbers}
                  checkAnswer={this.checkAnswer}
                  answerIsCorrect={answerIsCorrect}
            />
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
