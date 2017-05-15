import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Thumbnail, CardItem } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import CardImageHeaderStyle from './cardImageHeaderStyle';
import GlobalStyle from '../../../resources/globalStyle';
import { imageProp } from '../../../resources/propTypes';
import { CARD_IMAGE_HEADER_SHADOW, TRANSPARENT } from '../../../resources/colors';

// Card header with image and icon.
export default class CardImageHeader extends Component {
  static propTypes = {
    cover: imageProp.isRequired,
    icon: imageProp.isRequired,
    toNextScreen: React.PropTypes.func,
  };

  static defaultProps = {
    icon: undefined,
    toNextScreen: () => alert('hej!'),
  };

  render() {
    // Only show icon if it is provided as a prop
    let iconIfProvided = [];
    if (this.props.icon !== undefined) {
      iconIfProvided = (
        <LinearGradient
          start={{ x: 0.0, y: 0.0 }} end={{ x: 0.5, y: 0 }}
          colors={[CARD_IMAGE_HEADER_SHADOW, TRANSPARENT]}
          style={CardImageHeaderStyle.padder}
        >
          <Thumbnail source={this.props.icon} />
        </LinearGradient>
      );
    }

    return (
      <CardItem
        style={StyleSheet.flatten(GlobalStyle.noPadding)}
        onPress={this.props.toNextScreen}
      >
        <Thumbnail
          square resizeMode="cover" style={StyleSheet.flatten(CardImageHeaderStyle.coverPhoto)}
          source={this.props.cover}
        >
          {iconIfProvided}
        </Thumbnail>
      </CardItem>
    );
  }
}
