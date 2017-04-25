import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Thumbnail, Button, Text as NBText } from 'native-base';
import styles from './style';
import globalStyle from '../../common/globalStyle';
import I18n from '../../../i18n';

const PICTURE = require('../../../../assets/images/people.png');

export default class WelcomeInfoScreen extends Component {

  render() {
    return (
      <Container style={StyleSheet.flatten(globalStyle.whiteBackgroundColor)}>
        <Content contentContainerStyle={styles.padder}>
          <View style={styles.pictureContainer}>
            <Thumbnail
              resizeMode="contain"
              style={StyleSheet.flatten(styles.picture)} source={PICTURE}
            />
          </View>
          <View>
            <Text style={StyleSheet.flatten(styles.title)}>
              {I18n.t('wizard.welcome_to_people')}
            </Text>
          </View>
          <View>
            <Text style={StyleSheet.flatten(styles.description)}>
              {I18n.t('wizard.welcome_to_people_description')}
            </Text>
          </View>
          <View style={styles.nextButtonContainer}>
            <Button style={StyleSheet.flatten(styles.alignButtonCenter)} rounded primary>
              <NBText>{I18n.t('button_actions.next')}</NBText>
            </Button>
          </View>
          <View style={styles.skipButtonContainer}>
            <Button light transparent style={StyleSheet.flatten(styles.alignButtonCenter)} rounded>
              <Text>{I18n.t('button_actions.skip')}</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
