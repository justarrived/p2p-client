import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input } from 'native-base';
import styles from './style';
import I18n from '../../../i18n';
import JAInputIcon from '../ja-input-icon';
import { JA_INPUT } from '../../../resources/constants';

/*
The available types of ja-input is firstName, lastName, address, postalCode, city,
phoneNumber, email, and password.
if no type is give a default inputfield will be returned.
*/

export default class JAInput extends Component {

  static propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    typeOfInput: PropTypes.oneOf(Object.values(JA_INPUT)),

  }

  static defaultProps = {
    disabled: false,
    defaultValue: '',
    onChange: undefined,
    typeOfInput: undefined,
  }

  /*
    placeholderTitle is the text used for a placeholder value
    icon is set to a JAInputIcon if one should be used.
      List of available icons can be found at: http://ionicframework.com/docs/ionicons
    secureInput is a boolean, if true hides the input. Used for passwords.
    keyboardTypeUsed changes the type of keyboard displayed.
      The following values work cross-platform: default, numeric, email-address, phone-pad
    numberOfCharactersPermitted sets the limit of characters permitted to be used in an inputfield.
  */

  render() {
    let placeholderTitle;
    let icon;
    let secureInput = false;
    let keyboardTypeUsed = 'default';
    // leaving this empty gives you unlimited characters
    let numberOfCharactersPermitted;

    switch (this.props.typeOfInput) {
      case JA_INPUT.FIRST_NAME:
        placeholderTitle = I18n.t('account.first_name');
        break;

      case JA_INPUT.LAST_NAME:
        placeholderTitle = I18n.t('account.last_name');
        break;

      case JA_INPUT.ADDRESS:
        placeholderTitle = I18n.t('account.address');
        break;

      case JA_INPUT.POSTAL_CODE:
        placeholderTitle = I18n.t('account.postal_code');
        keyboardTypeUsed = 'numeric';
        numberOfCharactersPermitted = 5;
        break;

      case JA_INPUT.CITY:
        placeholderTitle = I18n.t('account.city');
        break;

      case JA_INPUT.PHONE_NUMBER:
        placeholderTitle = I18n.t('account.phone_number');
        keyboardTypeUsed = 'numeric';
        icon = <JAInputIcon name="call" />;
        break;

      case JA_INPUT.PASSWORD:
        placeholderTitle = I18n.t('account.password');
        icon = <JAInputIcon name="lock" />;
        secureInput = true;
        break;

      case JA_INPUT.EMAIL:
        placeholderTitle = I18n.t('account.email');
        icon = <JAInputIcon name="mail" />;
        keyboardTypeUsed = 'email-address';
        break;

      case JA_INPUT.CVC:
        placeholderTitle = 'CVC';
        icon = <JAInputIcon name="key" />;
        secureInput = true;
        keyboardTypeUsed = 'numeric';
        numberOfCharactersPermitted = 3;
        break;

      default:
        /* Gives an input with no placeholderTitle or icon and default values for
        secureInput, keyboardType, and numberOfCharactersPermitted */
        break;
    }
    return (
      <Item style={StyleSheet.flatten([styles.topPadding, this.props.disabled && styles.disabled])}>
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
