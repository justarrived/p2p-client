import React, { Component } from 'react';

import { StyleSheet } from 'react-native';
import { Item, Label, Input } from 'native-base';
import styles from './style';


export default class EmailInput extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    stacked: React.PropTypes.bool,
    floating: React.PropTypes.bool,
    disable: React.PropTypes.bool,
  }
  render() {
    const floating = this.props.floating;
    const stacked = this.props.stacked;
    const disable = this.props.disable;
    return (
      <Item stackedLabel={stacked} floatingLabel={floating} >
        <Label>{this.props.title}</Label>
        <Input keyboardType="numeric" returnKeyType={'next'} defaultValue={''} disabled={disable} onChangeText={text => this.props.onChange(text)} style={StyleSheet.flatten(styles.inputField)} />
      </Item>
    );
  }

}
