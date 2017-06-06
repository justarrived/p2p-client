import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ListItem, CheckBox, Body } from 'native-base';
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
      <ListItem style={StyleSheet.flatten(styles.noUnderline)}>
        <CheckBox checked={this.props.isChecked} onPress={() => this.props.onClick()} />
        <Body style={StyleSheet.flatten(styles.textPadding)} >
          <Text>{this.props.title}</Text>
        </Body>
      </ListItem>
    );
  }
}
