import React, { Component } from 'react';
import { Card } from 'native-base';

import CardImageHeader from '../../common/card-image-header/cardImageHeader';
import SimpleCardBody from '../../common/simple-card-body/simpleCardBody';

export default class JobTypeCard extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    cover: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string.isRequired,
    toNextScreen: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <Card>
        <CardImageHeader
          cover={this.props.cover} icon={this.props.icon}
          toNextScreen={this.props.toNextScreen}
        />
        <SimpleCardBody
          title={this.props.title} subtitle={this.props.subtitle}
          icon="arrow-forward" toNextScreen={this.props.toNextScreen}
        />
      </Card>
    );
  }
}
