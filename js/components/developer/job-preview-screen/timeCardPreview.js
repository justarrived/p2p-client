import React, { Component } from 'react';
import { Card, CardItem, Right, Text, Body, Grid, Row } from 'native-base';

import CardHeader from '../common/cardHeader';

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
      <Card>
        <CardHeader icon="time" title="Tidsåtgång" subtitle="Hur lång tid tar uppdraget?" />
        <CardItem>
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
      </Card>
    );
  }
}
