import React, { Component } from 'react'
import Stars from './Stars'
import CheckButton from './CheckButton'
import Numbers from './Numbers'
import { Pager, Grid, Col, Row } from 'react-bootstrap'

class App extends Component {
  constructor() {
    super()

    this.state = {
      numbers: [1, 2],
      starsNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
  render() {
    return (
      <div className="App">
        <Pager>
          <Grid>
            <Row >
              <h2>Play Nine</h2>
            </Row>
            <Row >
              <Col xs={12} md={5} className="Col">
                <Stars starsNumber={this.state.starsNumber} />
              </Col>
              <Col xs={12} md={2} className="Col">
                <CheckButton />
              </Col>
              <Col xs={12} md={5} className="Col">
                Asnwer
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={5} className="Col">
                <Numbers numbers={this.state.numbers}/>
              </Col>
            </Row>
          </Grid>
        </Pager>
      </div>
    )
  }
}

export default App
