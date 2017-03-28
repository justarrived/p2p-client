import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, CheckBox, Text, Body } from 'native-base';
import styles from './style';

export default class CheckBoxWithText extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    isChecked: React.PropTypes.bool,
    onClick: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    isChecked: false,
  }

  render() {
    return (
      <ListItem>
        <CheckBox checked={this.props.isChecked} onPress={() => this.props.onClick()} />
        <Body style={StyleSheet.flatten(styles.textPadding)} >
          <Text>{this.props.title}</Text>
        </Body>
      </ListItem>
    );
  }
}
