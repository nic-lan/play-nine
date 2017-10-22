import React, { Component } from 'react'
import Stars from './Stars'
import CheckButton from './CheckButton'
import PlayNumbers from './PlayNumbers'
import SelectedNumbers from './SelectedNumbers'
import { Pager, Grid, Col, Row } from 'react-bootstrap'
import _ from 'underscore'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      starsNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      selectedNumbers: [],
      answerIsCorrect: null
    }

    const functions_to_bind_with_this = [
      'sum',
      'selectNumber',
      'unselectNumber',
      'checkAnswerForUnselection'
    ]

    functions_to_bind_with_this.forEach((f) => { this[f] = this[f].bind(this) })
  }

  selectNumber(number) {
    this.setState(prevState => (
      {
        selectedNumbers: prevState.selectedNumbers.concat(number),
        playNumbers: _.without(prevState.playNumbers, number),
        answerIsCorrect: this.sum(prevState.selectedNumbers, number) === this.state.starsNumber.length
      }
    ))
  }

  unselectNumber(number) {
    this.setState(prevState => (
      {
        selectedNumbers: _.without(prevState.selectedNumbers, number),
        playNumbers: prevState.playNumbers.concat(number),
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

  render() {
    return (
      <div className="App">
        <Pager>
          <Grid>
            <Row >
              <h2>Play Nine</h2>
            </Row>
            <Row>
              <Col xs={12} md={5} className="Col">
                <Stars starsNumber={this.state.starsNumber} />
              </Col>
              <Col xs={12} md={2} className="Col">
                <CheckButton answerIsCorrect={this.state.answerIsCorrect} />
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
}

export default App
