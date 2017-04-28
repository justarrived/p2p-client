import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input } from 'native-base';
import styles from './style';
import I18n from '../../../i18n';
import JAInputIcon from '../ja-input-icon';

/*
The available types of ja-input is firstName, lastName, address, postalCode, city,
phoneNumber, email, and password.
if no type is give a default inputfield will be returned.
*/

export default class PasswordInput extends Component {

  static propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    typeOfInput: PropTypes.string.isRequired,
  }

  static defaultProps = {
    disabled: false,
    defaultValue: '',
    onChange: undefined,
  }

  /*
    placeholderTitle is used text used for a placeholder value
    icon is set to a JAInputIcon if one should be used.
      List of avilable icons can be found at : http://ionicframework.com/docs/ionicons
    secureInput is a boolen, if true hides the input. Used for passwords.
    keyboardTypeUsed changes the type of keyboard displayed.
      The following values work crossplatform: default, numeric, email-address, phone-pad
    numberOfCharactersPermitted sets the limit of characters promitted to used in an inputfield.
  */

  render() {
    let placeholderTitle;
    let icon;
    let secureInput = false;
    let keyboardTypeUsed = 'default';
    // leaving this empty gives you unlimited characters
    let numberOfCharactersPermitted;

    switch (this.props.typeOfInput) {
      case 'firstName':
        placeholderTitle = I18n.t('account.first_name');
        break;

      case 'lastName':
        placeholderTitle = I18n.t('account.last_name');
        break;

      case 'address':
        placeholderTitle = I18n.t('account.address');
        break;

      case 'postalCode':
        placeholderTitle = I18n.t('account.postal_code');
        keyboardTypeUsed = 'numeric';
        numberOfCharactersPermitted = 5;
        break;

      case 'city':
        placeholderTitle = I18n.t('account.city');
        break;

      case 'phoneNumber':
        placeholderTitle = I18n.t('account.phone_number');
        keyboardTypeUsed = 'numeric';
        icon = <JAInputIcon name="call" />;
        break;

      case 'password':
        placeholderTitle = I18n.t('account.password');
        icon = <JAInputIcon name="lock" />;
        secureInput = true;
        break;

      case 'email':
        placeholderTitle = I18n.t('account.email');
        icon = <JAInputIcon name="mail" />;
        keyboardTypeUsed = 'email-address';
        break;

      default:
        /* Gives a input with no placeholderTitle or icon. and default values for
        secureInput, keyboardType, and numberOfCharactersPermitted */
        break;
    }
    return (
      <Item style={StyleSheet.flatten([this.props.disabled && styles.disabled])}>
        {icon}
        <Input
          placeholder={placeholderTitle}
          secureTextEntry={secureInput}
          keyboardType={keyboardTypeUsed}
          returnKeyType="next"
          maxLength={numberOfCharactersPermitted}
          defaultValue={this.props.defaultValue}
          disabled={this.props.disabled}
          onChangeText={this.props.onChange}
        />
      </Item>
    );
  }
}
