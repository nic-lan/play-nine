import React, { Component } from 'react';
import Stars from './Stars';
import { Grid, Col, Row } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <h2>Play Nine</h2>
          </Row>
          <Row>
            <Col xs={5}>
              <Stars starsNumber={5} />
            </Col>
            <Col xs={2}>
              =
            </Col>
            <Col xs={5}>
              Asnwer
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App;
