import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Col, Grid } from 'native-base';

// styles
import styles from './style';
import GlobalStyle from '../../common/globalStyle';

import I18n from '../../../i18n';
import { requestCreateUser } from '../../../actions/user';
import { createJsonDataAttributes } from '../../../networking/json';
import {
  changeFirstName, changeLastName, changeEmail, changePassword, toggleCheckBox, changeAppLanguage,
} from '../../../actions/account';

import JATagline from '../../common/ja-tagline';
import JAButton from '../../common/ja-button';
import { JA_BUTTON, JA_INPUT } from '../../common/constants';
import JAInput from '../../common/ja-input';
import CheckBoxPUL from '../../common/checkbox-with-text';
import LanguageDropdown from '../../common/language-dropdown/languageDropdown';
import Footer from '../../common/footer/footer';


// TODO Replace these standard values with real values.
// These are used during development only.
// LanguageDropdown shows one language when first rendered even though
// no language is seleceted. Could lead to bugs
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

  static propTypes = {
    changeFirstName: PropTypes.func.isRequired,
    changeLastName: PropTypes.func.isRequired,
    changeEmail: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    changeAppLanguage: PropTypes.func.isRequired,
    toggleCheckBox: PropTypes.func.isRequired,
    account: PropTypes.shape({
      firstName: React.PropTypes.string,
      lastName: React.PropTypes.string,
      email: React.PropTypes.string,
      password: React.PropTypes.string,
      appLanguage: React.PropTypes.string,
      userAgreement: React.PropTypes.bool,
    }).isRequired,
    goToLogin: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
  }

  createAccount() {
    this.props.signUp(getCreateUserJson(this.props.account.email, this.props.account.password));
  }

  render() {
    return (
      <Container style={StyleSheet.flatten(GlobalStyle.whiteBackgroundColor)}>
        <Content contentContainerStyle={GlobalStyle.modalPadder} >
          <JATagline />
          <Text style={styles.titleText}>{I18n.t('sign_up.create_account_title')}</Text>
          <Grid>
            <Col style={StyleSheet.flatten(styles.colPadding)}>
              <JAInput
                typeOfInput={JA_INPUT.FIRST_NAME}
                onChange={text => this.props.changeFirstName(text)}
              />
            </Col>
            <Col>
              <JAInput
                typeOfInput={JA_INPUT.LAST_NAME}
                onChange={text => this.props.changeLastName(text)}
              />
            </Col>
          </Grid>
          <JAInput
            typeOfInput={JA_INPUT.EMAIL}
            onChange={text => this.props.changeEmail(text)}
          />
          <JAInput
            typeOfInput={JA_INPUT.PASSWORD}
            onChange={text => this.props.changePassword(text)}
          />
          <LanguageDropdown onChange={input => this.props.changeAppLanguage(input)} />
          <CheckBoxPUL
            title={I18n.t('sign_up.accept_pul_and_terms')}
            isChecked={this.props.account.userAgreement}
            onClick={() => this.props.toggleCheckBox()}
          />
          <View style={styles.buttonContainer}>
            <JAButton
              typeOfButton={JA_BUTTON.PRIMARY}
              content={I18n.t('sign_up.sign_up_button')}
              actionOnClick={() => this.createAccount()}
            />
          </View>
        </Content>
        <Footer
          onPress={() => this.props.goToLogin()}
          title={I18n.t('sign_up.already_have_an_account_button')}
        />
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    changeFirstName: input => dispatch(changeFirstName(input)),
    changeLastName: input => dispatch(changeLastName(input)),
    changeEmail: input => dispatch(changeEmail(input)),
    changePassword: input => dispatch(changePassword(input)),
    toggleCheckBox: () => dispatch(toggleCheckBox()),
    changeAppLanguage: input => dispatch(changeAppLanguage(input)),
    signUp: (user, password) => dispatch(requestCreateUser(user, password)),
  };
}

const mapStateToProps = state => ({ account: state.account });

export default connect(mapStateToProps, bindAction)(CreateAccountScreen);
