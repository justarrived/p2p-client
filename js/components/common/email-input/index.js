import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Item, Label, Input } from 'native-base';
import styles from './style';

export default class EmailInput extends Component {
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
    // Should be able to just grap the css from stylefile and put logic in Item style={}
    // Dont know how yet
    let disableStyle = {};
    if (this.props.disabled) {
      disableStyle = { borderColor: 'transparent' };
    }

    let stackLabel = true;
    let floatLabel = false;
    if (this.props.defaultValue === '') {
      stackLabel = false;
      floatLabel = true;
    }

    return (
      <Item
        stackedLabel={stackLabel} floatingLabel={floatLabel}
        style={disableStyle}
      >
        <Label>{this.props.title}</Label>
        <Input
          returnKeyType="next" keyboardType="email-address"
          defaultValue={this.props.defaultValue}
          disabled={this.props.disabled}
          onChangeText={text => this.props.onChange(text)}
          style={StyleSheet.flatten(styles.inputPadding)}
          onSubmitEditing={() => console.log('next')}
        />
      </Item>
    );
  }

}
