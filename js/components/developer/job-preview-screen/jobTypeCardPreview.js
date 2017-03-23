import React, { Component } from 'react';
import { Card } from 'native-base';

import CardImageHeader from '../../common/card-image-header/cardImageHeader';
import SimpleCardBody from '../../common/simple-card-body/simpleCardBody';

export default class JobTypeCardPreview extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    cover: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <Card>
        <CardImageHeader cover={this.props.cover} icon={this.props.icon} />
        <SimpleCardBody title={this.props.title} subtitle={this.props.subtitle} />
      </Card>
    );
  }
}
