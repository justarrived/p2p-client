import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Form, Col, Row, Grid, Button, Card, CardItem, Text } from 'native-base';
import styles from './style';

import {
  changeFirstName, changeLastName, changeAddress, changePostCode, changePostArea,
  changePhoneNumber, changeEmail, changePassword, toggleCheckBox,
} from '../../../actions/account';

import EmailInput from '../../common/email-input';
import PhoneInput from '../../common/numeric-input';
import PasswordInput from '../../common/password-input';
import TextInput from '../../common/text-input';
import PostcodeInput from '../../common/post-code-input';
import CheckBoxPUL from '../../common/checkbox-with-text';
import GlobalStyle from '../../common/globalStyle';

class CreateAccountScreen extends Component {
  static navigationOptions = {
    title: 'Skapa Konto',
  };

  static propTypes = {
    changeFirstName: React.PropTypes.func.isRequired,
    changeLastName: React.PropTypes.func.isRequired,
    changeAddress: React.PropTypes.func.isRequired,
    changePostCode: React.PropTypes.func.isRequired,
    changePostArea: React.PropTypes.func.isRequired,
    changePhoneNumber: React.PropTypes.func.isRequired,
    changeEmail: React.PropTypes.func.isRequired,
    changePassword: React.PropTypes.func.isRequired,
    toggleCheckBox: React.PropTypes.func.isRequired,
    account: React.PropTypes.shape({
      firstName: React.PropTypes.string,
      lastName: React.PropTypes.string,
      address: React.PropTypes.string,
      postCode: React.PropTypes.string,
      postArea: React.PropTypes.string,
      phoneNumber: React.PropTypes.string,
      email: React.PropTypes.string,
      password: React.PropTypes.string,
      userAgreement: React.PropTypes.bool,
      disabled: React.PropTypes.boolean,
    }).isRequired,
  }

  pressedRegister() {
    const a = this.props.account;
    alert(
          ` Förnamn: ${a.firstName}`
        + `\n Efternamn: ${a.lastName}`
        + `\n Adress: ${a.address}`
        + `\n postnummer: ${a.postCode}`
        + `\n Ort: ${a.postArea}`
        + `\n Telefonnumer: ${a.phoneNumber}`
        + `\n Epost: ${a.email}`
        + `\n checked: ${a.userAgreement}`,
        +` Lösenord: ${a.password}`,
      );
  }

  // nextScreen is either jobPreview or personalInfo
  pressRegisterButton() {
    const { navigate } = this.props.navigation;
    navigate(this.props.navigation.state.params.nextScreen);
  }

  // Navigates to LoginScreen with nextScreen param as either jobPreview or personalInfo
  pressAlreadyGotAccountButton() {
    const { navigate } = this.props.navigation;
    navigate('LoginScreen', { nextScreen: this.props.navigation.state.params.nextScreen });
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <Card>
            <CardItem bordered style={StyleSheet.flatten(GlobalStyle.noPadding)}>
              <Form style={StyleSheet.flatten(styles.form)}>
                <Grid>
                  <Row>
                    <Col>
                      <TextInput
                        title="Förnamn"
                        onChange={input => this.props.changeFirstName(input)}
                      />
                    </Col>
                    <Col>
                      <TextInput
                        title="Efternamn"
                        onChange={input => this.props.changeLastName(input)}
                      />
                    </Col>
                  </Row>

                  <TextInput
                    title="Adress"
                    onChange={input => this.props.changeAddress(input)}
                  />

                  <Row>
                    <Col>
                      <TextInput
                        title="Ort"
                        onChange={input => this.props.changePostArea(input)}
                      />
                    </Col>
                    <Col>
                      <PostcodeInput
                        title="Postnummer"
                        onChange={input => this.props.changePostCode(input)}
                      />
                    </Col>
                  </Row>
                </Grid>

                <PhoneInput
                  title="Telefonnummer"
                  onChange={input => this.props.changePhoneNumber(input)}
                />
                <EmailInput
                  title="E-post"
                  onChange={input => this.props.changeEmail(input)}
                />
                <PasswordInput
                  title="Lösenord"
                  onChange={input => this.props.changePassword(input)}
                />
                <CheckBoxPUL
                  title="Jag accepterar PUL och användarvillkor"
                  isChecked={this.props.account.userAgreement}
                  onClick={() => this.props.toggleCheckBox()}
                />
              </Form>
            </CardItem>
            <CardItem style={StyleSheet.flatten(GlobalStyle.noPadding)}>
              <Grid style={StyleSheet.flatten(styles.buttonContainer)}>
                <Row style={StyleSheet.flatten(styles.fullFlex)}>
                  <Button
                    block
                    onPress={() => this.pressedRegister()}
                    style={StyleSheet.flatten(styles.fullFlex)}
                  >
                    <Text style={StyleSheet.flatten(styles.regButtonText)}>
                      REGISTRERA
                    </Text>
                  </Button>
                </Row>
                <Row style={StyleSheet.flatten(styles.fullFlex)}>
                  <Button
                    small block bordered
                    onPress={() => this.pressAlreadyGotAccountButton()}
                    style={StyleSheet.flatten(styles.secondButtonPadding)}
                  >
                    <Text>
                      Jag har redan ett konto - Logga in
                    </Text>
                  </Button>
                </Row>
              </Grid>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    changeFirstName: input => dispatch(changeFirstName(input)),
    changeLastName: input => dispatch(changeLastName(input)),
    changeAddress: input => dispatch(changeAddress(input)),
    changePostCode: input => dispatch(changePostCode(input)),
    changePostArea: input => dispatch(changePostArea(input)),
    changePhoneNumber: input => dispatch(changePhoneNumber(input)),
    changeEmail: input => dispatch(changeEmail(input)),
    changePassword: input => dispatch(changePassword(input)),
    toggleCheckBox: () => dispatch(toggleCheckBox()),
  };
}

const mapStateToProps = state => ({ account: state.account });

export default connect(mapStateToProps, bindAction)(CreateAccountScreen);
