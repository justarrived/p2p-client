import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Thumbnail, CardItem } from 'native-base';
import CardImageHeaderStyle from './cardImageHeaderStyle';
import GlobalStyle from '../../common/globalStyle';

// Card header with image and icon.
export default class CardImageHeader extends Component {
  static propTypes = {
    cover: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string,
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
        <Thumbnail source={{ uri: this.props.icon }} />
      );
    }

    return (
      <CardItem
        style={StyleSheet.flatten(GlobalStyle.noPadding)}
        onPress={this.props.toNextScreen}
      >
        <Thumbnail
          square resizeMode="cover" style={StyleSheet.flatten(CardImageHeaderStyle.coverPhoto)}
          source={{ uri: this.props.cover }}
        >
          {iconIfProvided}
        </Thumbnail>
      </CardItem>
    );
  }
}
