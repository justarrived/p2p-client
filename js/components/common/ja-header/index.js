import React from 'react';
import { View } from 'react-native';
import JALogo from '../ja-logo';
import JATagline from '../ja-tagline';
import styles from './style';

// Brand header used in several views
const JAHeader = () => (
  <View style={styles.container}>
    <JALogo />
    <JATagline />
  </View>
);


export default JAHeader;
