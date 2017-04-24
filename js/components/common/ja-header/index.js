import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './style';

{/*
  Brand header used in several views.
  */}
class JAHeader extends Component {

  render = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}>
          People
        </Text>
        <Text style={styles.subTitle}>
          by Just Arrived
        </Text>
      </View>
    )
  }
}

export default JAHeader;
