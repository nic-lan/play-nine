import React, { Component } from 'react'
import Stars from './Stars'
import CheckButton from './CheckButton'
import PlayNumbers from './PlayNumbers'
import SelectedNumbers from './SelectedNumbers'
import { Pager, Grid, Col, Row, Button } from 'react-bootstrap'
import _ from 'underscore'

class App extends Component {
  constructor(props) {
    super(props)

    const functions_to_bind_with_this = [
      'sum',
      'selectNumber',
      'unselectNumber',
      'checkAnswerForUnselection',
      'storeAnswer',
      'defaultTemplate',
      'successTemplate',
      'refreshStars',
      'initializeStars'
    ]

    functions_to_bind_with_this.forEach((f) => { this[f] = this[f].bind(this) })

    this.state = {
      playNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      starsNumber: this.initializeStars(),
      selectedNumbers: [],
      answerIsCorrect: null
    }
  }

  selectNumber(number) {
    this.setState(prevState => (
      {
        selectedNumbers: prevState.selectedNumbers.concat(number).sort(),
        playNumbers: _.without(prevState.playNumbers, number),
        answerIsCorrect: this.sum(prevState.selectedNumbers, number) === this.state.starsNumber.length
      }
    ))
  }

  unselectNumber(number) {
    this.setState(prevState => (
      {
        selectedNumbers: _.without(prevState.selectedNumbers, number),
        playNumbers: prevState.playNumbers.concat(number).sort(),
        answerIsCorrect: this.checkAnswerForUnselection(prevState.selectedNumbers, prevState.selectedNumbers, number)
      }
    ))
  }

  sum(array, number) {
    return array.reduce((a, b) => a + b, 0) + number;
  }

  checkAnswerForUnselection(selectedNumbers, starsNumber, number) {
    let answer = null

    if(selectedNumbers.length > 1) { answer = this.sum(selectedNumbers, number) === starsNumber.length }

    return answer
  }

  storeAnswer() {
    this.setState(prevState => (
      {
        selectedNumbers: [],
        answerIsCorrect: null,
        starsNumber: this.initializeStars()
      }
    ))
  }

  initializeStars() {
    return _.range(_.random(1, 9))
  }

  refreshStars() {
    this.setState(prevState => (
      {
        starsNumber: this.initializeStars()
      }
    ))
  }

  defaultTemplate() {
    return (
      <div className="App">
        <Pager>
          <Grid>
            <Row >
              <Col>
                <h2>Play Nine <i onClick={() => this.refreshStars()} className="fa fa-refresh"/></h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={5} className="Col">
                <Stars starsNumber={this.state.starsNumber} />
              </Col>
              <Col xs={12} md={2} className="Col">
                <CheckButton
                  answerIsCorrect={this.state.answerIsCorrect}
                  storeAnswer={this.storeAnswer}
                />
              </Col>
              <Col xs={12} md={5} className="Col">
                <SelectedNumbers
                  selectedNumbers={this.state.selectedNumbers}
                  unselectNumber={this.unselectNumber}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={5} className="Col">
                <PlayNumbers numbers={this.state.playNumbers} selectNumber={this.selectNumber}/>
              </Col>
            </Row>
          </Grid>
        </Pager>
      </div>
    )
  }

  successTemplate() {
    return(
      <div className="App">
        <Pager>
          <Grid>
            <Row>
              <Col xs={12} md={5} className="Col">
                <h1>Congratulation !!!</h1>
                <p>You Won at PlayNine</p>
              </Col>
            </Row>
          </Grid>
        </Pager>
      </div>
    )
  }

  render() {
    if(this.state.selectedNumbers.length < 1 && this.state.playNumbers.length < 1) {
      return this.successTemplate()
    }
    else {
      return this.defaultTemplate()
    }
  }
}

export default App
