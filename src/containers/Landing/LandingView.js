import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Row,
  Col,
} from '../../components';


class LandingView extends PureComponent {

  render() {

    return (
      <Grid>
        <Row>
          <Col sm='4'>sdc
          </Col>
        </Row>
        <Row>
          <Col sm='1'>sd
          </Col>
          <Col sm='1'>sd
          </Col>
          <Col sm='1'>sd
          </Col>
          <Col sm='1'>sd
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default LandingView;
