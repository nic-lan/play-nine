import React, { Component } from 'react'
import Stars from './Stars'
import CheckButton from './CheckButton'
import Numbers from './Numbers'
import { Pager, Grid, Col, Row, Jumbotron } from 'react-bootstrap'

class App extends Component {
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
                <Stars starsNumber={9} />
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
                <Numbers />
              </Col>
            </Row>
          </Grid>
        </Pager>
      </div>
    )
  }
}

export default App
