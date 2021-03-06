import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Item, Label, Input } from 'native-base';
import styles from './style';
import I18n from '../../../i18n';

export default class EmailInput extends Component {
  static propTypes = {
    title: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool,
    defaultValue: React.PropTypes.string,
  }

  static defaultProps = {
    title: I18n.t('account.email'),
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
