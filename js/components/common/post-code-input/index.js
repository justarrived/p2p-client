import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Item, Label, Input } from 'native-base';
import styles from './style';

export default class TextInput extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool,
    defaultValue: React.PropTypes.string,
  }

  static defaultProps = {
    disabled: false,
    defaultValue: '',
  }

  render() {
    let stackLabel = true;
    let floatLabel = false;
    if (this.props.defaultValue === '') {
      stackLabel = false;
      floatLabel = true;
    }
    return (
      <Item
        stackedLabel={stackLabel} floatingLabel={floatLabel}
        style={StyleSheet.flatten([styles.active, this.props.disabled && styles.disabled])}
      >
        <Label>{this.props.title}</Label>
        <Input
          keyboardType="numeric"
          maxLength={5}
          returnKeyType={'next'}
          defaultValue={this.props.defaultValue}
          disabled={this.props.disabled}
          onChangeText={text => this.props.onChange(text)}
          style={StyleSheet.flatten(styles.inputField)}
        />
      </Item>
    );
  }
}
