import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { PRIMARY_THEME_COLOR,
         GRADIENT_ORANGE_COLOR,
         FACEBOOK_COLOR,
         FACEBOOK_GRADIENT_COLOR,
         WHITE } from '../../../resources/colors';
import { JA_BUTTON } from '../../../resources/constants';
import styles from './style';

const primaryButtonColor = [
  PRIMARY_THEME_COLOR,
  GRADIENT_ORANGE_COLOR,
];

const facebookButtonColor = [
  FACEBOOK_COLOR,
  FACEBOOK_GRADIENT_COLOR,
];

{ /*
  This component is supposed to be used as a generic button component throughout
  the app.
*/ }

class JAButton extends Component {
  static propTypes = {
    content: React.PropTypes.string.isRequired,
    actionOnClick: React.PropTypes.func,
    typeOfButton: React.PropTypes.oneOfType(JA_BUTTON),
  }

  static defaultProps = {
    actionOnClick: undefined,
  }
  render = () => {
    const {
      content,
      actionOnClick,
    } = this.props;

    // Set the button color depending on what type is passed in to the component
    let buttonColor;
    switch (this.props.typeOfButton) {

      case JA_BUTTON.PRIMARY:
        buttonColor = primaryButtonColor;
        break;

      case JA_BUTTON.FACEBOOK:
        buttonColor = facebookButtonColor;
        break;

      default:
        console.log('default');
        break;
    }

    return (
      <TouchableOpacity
        onPress={actionOnClick}
      >
        <LinearGradient
          start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }}
          colors={buttonColor}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>
            {content}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

export default JAButton;
