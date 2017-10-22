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
      starsNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      selectedNumbers: []
    }

    this.selectNumber = this.selectNumber.bind(this);
    this.unselectNumber = this.unselectNumber.bind(this);
  }

  selectNumber(number) {
    this.setState(prevState => (
      {
        selectedNumbers: prevState.selectedNumbers.concat(number),
        playNumbers: _.without(prevState.playNumbers, number)
      }
    ))
  }

  unselectNumber(number) {
    this.setState(prevState => (
      {
        selectedNumbers: _.without(prevState.selectedNumbers, number),
        playNumbers: prevState.playNumbers.concat(number)
      }
    ))
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
                <CheckButton />
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
