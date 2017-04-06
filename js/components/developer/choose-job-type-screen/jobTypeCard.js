import React, { Component, PropTypes } from 'react';
import { Card } from 'native-base';
import CardImageHeader from '../../common/card-image-header/cardImageHeader';
import SimpleCardBody from '../../common/simple-card-body/simpleCardBody';
import { imageProp } from '../../common/propTypes';

export default class JobTypeCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cover: imageProp.isRequired,
    icon: imageProp.isRequired,
    subtitle: PropTypes.string.isRequired,
    toNextScreen: PropTypes.func.isRequired,
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
