import React from 'react';
import { Text, View } from 'react-native';
import JALogo from '../ja-logo';
import styles from './style';

// Brand header used in several views
const JAHeader = () => (
  <View style={styles.container}>
    <JALogo />
    <Text style={styles.mainTitle}>
      People
    </Text>
    <Text style={styles.subTitle}>
      by Just Arrived
    </Text>
  </View>
);


export default JAHeader;
