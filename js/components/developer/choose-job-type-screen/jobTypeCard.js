import React, { Component } from 'react';
import { Card } from 'native-base';

import CardImageHeader from '../common/cardImageHeader';
import SimpleCardBody from '../common/simpleCardBody';

export default class JobTypeCard extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    cover: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string.isRequired,
  };

  // Temporary method to demonstrate component interaction
  pressCard = () => {
    alert(this.props.title);
  }

  render() {
    return (
      <Card>
        <CardImageHeader
          cover={this.props.cover} icon={this.props.icon} onPress={() => this.pressCard()}
        />
        <SimpleCardBody
          title={this.props.title} subtitle={this.props.subtitle}
          icon="arrow-forward" onPress={() => this.pressCard()}
        />
      </Card>
    );
  }
}
