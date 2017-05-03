import React from 'react';
import { Image } from 'react-native';
import styles from './style';

const LOGO = require('../../../../assets/images/logo.png');

const JALogo = () => (
  <Image
    style={styles.logoSize}
    source={LOGO}
  />
);


export default JALogo;
