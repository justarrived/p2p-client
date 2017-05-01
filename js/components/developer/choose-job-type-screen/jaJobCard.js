import React, { PropTypes } from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { imageProp } from '../../../resources/propTypes';
import styles from './jaJobCardStyles';

const JAJobCard = ({ title, cover, toNextScreen }) => {
  return (
    <TouchableOpacity onPress={() => toNextScreen()}>
      <Image
        source={{ uri: `${cover.uri}` }}
        style={styles.imageProperties}
      >
        <Text style={styles.textProperties}>
          {title}
        </Text>
      </Image>
    </TouchableOpacity>
  );
};

JAJobCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: imageProp.isRequired,
  toNextScreen: PropTypes.func.isRequired,
};

export default JAJobCard;
