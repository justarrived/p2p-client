import React from 'react';
import { View } from 'react-native';

import CardImageHeader from '../../common/card-image-header/cardImageHeader';
import SimpleCardBody from '../../common/simple-card-body/simpleCardBody';
import { imageProp } from '../../../resources/propTypes';

const PreviewHeaderView = ({ title, cover, icon, subtitle }) =>
  <View>
    <CardImageHeader
      cover={cover}
      icon={icon}
    />
    <SimpleCardBody
      title={title}
      subtitle={subtitle}
    />
  </View>;

PreviewHeaderView.propTypes = {
  title: React.PropTypes.string.isRequired,
  cover: imageProp.isRequired,
  icon: imageProp.isRequired,
  subtitle: React.PropTypes.string.isRequired,
};

export default PreviewHeaderView;
