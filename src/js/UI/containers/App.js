import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from '../components/Header';
import PostForm from '../containers/PostForm';
import PostDump from '../containers/PostDump';

class App extends Component {
  render() {
    return(
    <div>
      <Header />
      <Grid>
        <Row>
          <Col md={3}>
            <PostForm />
          </Col>
          <Col md={7}>
            <PostDump />
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }

}

export default App;
