import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Form, Col, Row, Grid, Button, Card, CardItem, Text } from 'native-base';
import styles from './style';
import I18n from '../../../i18n';
import { requestCreateUser } from '../../../actions/user';
import { createJsonDataAttributes } from '../../../networking/json';
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
                        onChange={input => this.props.changeFirstName(input)}
                      />
                    </Col>
                    <Col>
                      <TextInput
                        title={I18n.t('account.last_name')}
                        onChange={input => this.props.changeLastName(input)}
                      />
                    </Col>
                  </Row>
                  <TextInput
                    title={I18n.t('account.address')}
                    onChange={input => this.props.changeAddress(input)}
                  />
                  <Row>
                    <Col>
                      <PostcodeInput
                        title={I18n.t('account.postal_code')}
                        onChange={input => this.props.changePostCode(input)}
                      />
                    </Col>
                    <Col>
                      <TextInput
                        title={I18n.t('account.city')}
                        onChange={input => this.props.changePostArea(input)}
                      />
                    </Col>
                  </Row>
                </Grid>
                <PhoneInput
                  title={I18n.t('account.phone_number')}
                  onChange={input => this.props.changePhoneNumber(input)}
                />
                <EmailInput
                  title={I18n.t('account.email')}
                  onChange={input => this.props.changeEmail(input)}
                />
                <PasswordInput
                  title={I18n.t('account.password')}
                  onChange={input => this.props.changePassword(input)}
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
    changeFirstName: input => dispatch(changeFirstName(input)),
    changeLastName: input => dispatch(changeLastName(input)),
    changeAddress: input => dispatch(changeAddress(input)),
    changePostCode: input => dispatch(changePostCode(input)),
    changePostArea: input => dispatch(changePostArea(input)),
    changePhoneNumber: input => dispatch(changePhoneNumber(input)),
    changeEmail: input => dispatch(changeEmail(input)),
    changePassword: input => dispatch(changePassword(input)),
    toggleCheckBox: () => dispatch(toggleCheckBox()),
    signUp: (user, password) => dispatch(requestCreateUser(user, password)),
  };
}

const mapStateToProps = state => ({ account: state.account });

export default connect(mapStateToProps, bindAction)(CreateAccountScreen);
