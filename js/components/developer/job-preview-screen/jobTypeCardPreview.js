import React, { Component } from 'react';
import { View } from 'react-native';

import CardImageHeader from '../../common/card-image-header/cardImageHeader';
import SimpleCardBody from '../../common/simple-card-body/simpleCardBody';
import { imageProp } from '../../common/propTypes';

export default class JobTypeCardPreview extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    cover: imageProp.isRequired,
    icon: imageProp.isRequired,
    subtitle: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <View>
        <CardImageHeader cover={this.props.cover} icon={this.props.icon} />
        <SimpleCardBody title={this.props.title} subtitle={this.props.subtitle} />
      </View>
    );
  }
}
