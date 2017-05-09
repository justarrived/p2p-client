import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Form, Col, Row, Grid, Button, Card, CardItem, Text } from 'native-base';
import styles from './style';
import I18n from '../../../i18n';
import { requestCreateUser } from '../../../actions/userProfile';
import { createJsonDataAttributes } from '../../../networking/json';
import {
  setFirstName, setLastName, setAddress, setPostCode, setPostArea,
  setPhoneNumber, setEmail, setPassword, toggleCheckBox,
} from '../../../actions/userEdit';

import EmailInput from '../../common/email-input';
import PhoneInput from '../../common/numeric-input';
import PasswordInput from '../../common/password-input';
import TextInput from '../../common/text-input';
import PostcodeInput from '../../common/post-code-input';
import CheckBoxPUL from '../../common/checkbox-with-text';
import GlobalStyle from '../../../resources/globalStyle';

// TODO Replace these standard values with real values.
// These are used during development only.
function getCreateUserJson(email, password) {
  return createJsonDataAttributes({
    email,
    password,
    consent: true,
    system_language_id: 38,
    first_name: 'SomeName',
    last_name: 'SomeLastName',
  });
}

class CreateAccountScreen extends Component {
  static navigationOptions = {
    title: I18n.t('screen_titles.create_account'),
  };

  static propTypes = {
    setFirstName: React.PropTypes.func.isRequired,
    setLastName: React.PropTypes.func.isRequired,
    setAddress: React.PropTypes.func.isRequired,
    setPostCode: React.PropTypes.func.isRequired,
    setPostArea: React.PropTypes.func.isRequired,
    setPhoneNumber: React.PropTypes.func.isRequired,
    setEmail: React.PropTypes.func.isRequired,
    setPassword: React.PropTypes.func.isRequired,
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
    goToLogin: React.PropTypes.func.isRequired,
    signUp: React.PropTypes.func.isRequired,
  }

  createAccount() {
    this.props.signUp(getCreateUserJson(this.props.account.email, this.props.account.password));
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
                        title={I18n.t('account.first_name')}
                        onChange={input => this.props.setFirstName(input)}
                      />
                    </Col>
                    <Col>
                      <TextInput
                        title={I18n.t('account.last_name')}
                        onChange={input => this.props.setLastName(input)}
                      />
                    </Col>
                  </Row>
                  <TextInput
                    title={I18n.t('account.address')}
                    onChange={input => this.props.setAddress(input)}
                  />
                  <Row>
                    <Col>
                      <PostcodeInput
                        title={I18n.t('account.postal_code')}
                        onChange={input => this.props.setPostCode(input)}
                      />
                    </Col>
                    <Col>
                      <TextInput
                        title={I18n.t('account.city')}
                        onChange={input => this.props.setPostArea(input)}
                      />
                    </Col>
                  </Row>
                </Grid>
                <PhoneInput
                  title={I18n.t('account.phone_number')}
                  onChange={input => this.props.setPhoneNumber(input)}
                />
                <EmailInput
                  title={I18n.t('account.email')}
                  onChange={input => this.props.setEmail(input)}
                />
                <PasswordInput
                  title={I18n.t('account.password')}
                  onChange={input => this.props.setPassword(input)}
                />
                <CheckBoxPUL
                  title={I18n.t('sign_up.accept_pul_and_terms')}
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
                    onPress={() => this.createAccount()}
                    style={StyleSheet.flatten(styles.fullFlex)}
                  >
                    <Text style={StyleSheet.flatten(styles.regButtonText)}>
                      {I18n.t('sign_up.sign_up_button')}
                    </Text>
                  </Button>
                </Row>
                <Row style={StyleSheet.flatten(styles.fullFlex)}>
                  <Button
                    small block bordered
                    onPress={() => this.props.goToLogin()}
                    style={StyleSheet.flatten(styles.secondButtonPadding)}
                  >
                    <Text>
                      {I18n.t('sign_up.already_have_an_account_button')}
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
    setFirstName: input => dispatch(setFirstName(input)),
    setLastName: input => dispatch(setLastName(input)),
    setAddress: input => dispatch(setAddress(input)),
    setPostCode: input => dispatch(setPostCode(input)),
    setPostArea: input => dispatch(setPostArea(input)),
    setPhoneNumber: input => dispatch(setPhoneNumber(input)),
    setEmail: input => dispatch(setEmail(input)),
    setPassword: input => dispatch(setPassword(input)),
    toggleCheckBox: () => dispatch(toggleCheckBox()),
    signUp: (user, password) => dispatch(requestCreateUser(user, password)),
  };
}

const mapStateToProps = state => ({ account: state.userEdit.attributes });

export default connect(mapStateToProps, bindAction)(CreateAccountScreen);
