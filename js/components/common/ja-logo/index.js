import React from 'react';
import { View, Image } from 'react-native';
import styles from './style';

const LOGO = require('../../../../assets/logo.png');

const JALogo = () => (
  <View>
    <Image
      style={styles.logoSize}
      source={LOGO}
    />
  </View>
);


export default JALogo;
