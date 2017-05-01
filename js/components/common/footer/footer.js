import React, { PropTypes } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text } from 'react-native';
import styles from './style';

/*
A footer component to be used in CreateAccountScreen, LoginScreen and ForgotpasswordScreen
If a onPress prop is provided the whole component is will trigger OnPress.
If a style if provided it will be added to the View, not the title text.
If a title is provided the text will displayed. Else no text is shown.
*/

const Footer = props => (
  <TouchableWithoutFeedback {...props}>
    <View style={styles.footerView} {...props}>
      <Text style={StyleSheet.flatten(styles.footerText)} >{props.title}</Text>
    </View>
  </TouchableWithoutFeedback>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  title: '',
};

export default Footer;
