import React, { Component } from 'react';
import Stars from './Stars';
import CheckButton from './CheckButton';
import { Pager, Grid, Col, Row } from 'react-bootstrap';

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
              <Col xs={12} md={5} >
                <Stars starsNumber={9} />
              </Col>
              <Col xs={12} md={2}>
                <CheckButton />
              </Col>
              <Col xs={12} md={5}>
                Asnwer
              </Col>
            </Row>
          </Grid>
        </Pager>
      </div>
    )
  }
}

export default App;
