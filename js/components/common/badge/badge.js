import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BadgeStyles from './badgeStyles';
import { BADGE_COLOR_DEFAULT } from '../../common/colors';

// Badge component. A color can be specified optionally as a prop.
export default class Badge extends Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    color: React.PropTypes.string,
  }

  static defaultProps = {
    color: BADGE_COLOR_DEFAULT,
  };

  render() {
    return (
      <View style={[BadgeStyles.badge, { backgroundColor: this.props.color }]}>
        <Text style={BadgeStyles.badgeText}>{this.props.text}</Text>
      </View>
    );
  }

}
