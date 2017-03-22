import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Form, Col, Row, Grid, Button, Card } from 'native-base';
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

class CreateAccountScreen extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Developer',
    },
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

  pressedGotAccount() {
    alert('Pressed already got account!');
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <Form style={StyleSheet.flatten(styles.container)}>
              <Grid>
                <Row>
                  <Col>
                    <TextInput
                      title="Förnamn" disabled={this.props.account.disabled}
                      onChange={input => this.props.changeFirstName(input)}
                    />
                  </Col>
                  <Col>
                    <TextInput
                      title="Efternamn" disabled={this.props.account.disabled}
                      onChange={input => this.props.changeLastName(input)}
                    />
                  </Col>
                </Row>

                <TextInput
                  title="Adress" disabled={this.props.account.disabled}
                  onChange={input => this.props.changeAddress(input)}
                />

                <Row>
                  <Col>
                    <TextInput
                      title="Ort" disabled={this.props.account.disabled}
                      onChange={input => this.props.changePostArea(input)}
                    />
                  </Col>
                  <Col>
                    <PostcodeInput
                      title="Postnummer" disabled={this.props.account.disabled}
                      onChange={input => this.props.changePostCode(input)}
                    />
                  </Col>
                </Row>
              </Grid>

              <PhoneInput
                title="Telefonnummer " disabled={this.props.account.disabled}
                onChange={input => this.props.changePhoneNumber(input)}
              />
              <EmailInput
                title="E-post" disabled={this.props.account.disabled}
                onChange={input => this.props.changeEmail(input)}
              />
              <PasswordInput
                title="Lösenord " disabled={this.props.account.disabled}
                onChange={input => this.props.changePassword(input)}
              />
              <CheckBoxPUL
                title="Jag accepterar PUL och användarvillkor"
                isChecked={this.props.account.userAgreement}
                onClick={() => this.props.toggleCheckBox()}
              />
            </Form>
          </Card>

          <View style={StyleSheet.flatten(styles.bottomContainer)}>
            <Button block onPress={() => this.pressedRegister()}>
              <Text style={StyleSheet.flatten(styles.regButtonText)}>
                REGISTRERA
              </Text>
            </Button>
            <Button
              small block bordered
              onPress={() => this.pressedGotAccount()}
              style={StyleSheet.flatten(styles.secondButtonPadding)}
            >
              <Text style={StyleSheet.flatten(styles.tranparentButtonText)}>
                Jag har redan ett konto - Logga in
              </Text>
            </Button>
          </View>
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