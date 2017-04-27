import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import styles from './style';

/*
To give all icons the same width a wrapper View is used with a default width.
Ensuring icons are the same width makes it possible to align the parent input component correclty.

If a style is passed as a prop into the compoenent
the style prop will override the default style of the View component.

A name prop for the icon is needed.
List of avilable icons can be found at : http://ionicframework.com/docs/ionicons
*/

const JAInputIcon = props => (
  <View style={styles.iconWrapper} {...props}>
    <Icon {...props} style={StyleSheet.flatten(styles.icon)} />
  </View>
);

export default JAInputIcon;
