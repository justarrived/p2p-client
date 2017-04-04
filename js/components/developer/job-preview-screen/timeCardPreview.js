import React, { Component } from 'react';
import { CardItem, Right, Text, Body, Grid, Row } from 'native-base';

// Card showing the duration of the job, in the job creation preview.
export default class TimeCardPreview extends Component {
  static propTypes = {
    data: React.PropTypes.shape({
      duration: React.PropTypes.string,
      cost: React.PropTypes.string,
    }).isRequired,
  };

  render() {
    const { duration, cost } = this.props.data;
    return (
      <CardItem bordered>
        <Grid>
          <Row>
            <Text note>Tidsåtgång</Text>
          </Row>
          <Row>
            <Body>
              <Text>{duration}</Text>
            </Body>
            <Right>
              <Text note>{cost}</Text>
            </Right>
          </Row>
        </Grid>
      </CardItem>
    );
  }
}
