import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Form,
  Col,
  Grid,
  Button,
  Thumbnail,
} from 'native-base';
import styles from './style';
import PostCodeInput from '../../common/post-code-input';
import EmailInput from '../../common/email-input';
import PasswordInput from '../../common/password-input';
import TextInputter from '../../common/text-input';
import PhoneInput from '../../common/numeric-input';

const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';


export default class PersonalInfoScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
          <View style={StyleSheet.flatten(styles.topContainer)}>
            <View style={styles.logoContainer}>
              <Thumbnail
                style={StyleSheet.flatten(styles.logo)} source={{
                  uri: LOGO_URL,
                }}
              />
            </View>
            <Text style={StyleSheet.flatten(styles.nameText)}>
              John Doe
            </Text>
          </View>
          <Form style={StyleSheet.flatten(styles.fromContainer)}>
            <TextInputter title={'Adress'} />
            <Grid>
              <Col>
                <PostCodeInput title={'Postnummer'} />
              </Col>
              <Col>
                <TextInputter title={'Ort'} />
              </Col>
            </Grid>
            <PhoneInput title={'Telefonnummer'} />
            <EmailInput title={'E-Post'} stacked />
            <PasswordInput title={'Lösenord'} />
          </Form>
          <View style={StyleSheet.flatten(styles.buttonContainer)}>
            <Button full info rounded onPress={() => alert('asdsad')}>
              <Text style={StyleSheet.flatten(styles.regButtonText)}>
                ÄNDRA
              </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

/*

*/
