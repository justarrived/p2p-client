import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Col, Grid } from 'native-base';

// styles
import styles from './style';
import GlobalStyle from '../../../resources/globalStyle';

import I18n from '../../../i18n';
import { requestCreateUser } from '../../../actions/userProfile';
import { createJsonDataAttributes } from '../../../networking/json';
import { setFirstName, setLastName, setEmail, setPassword, toggleCheckBox, setAppLanguage } from '../../../actions/userEdit';

import JATagline from '../../common/ja-tagline';
import JAButton from '../../common/ja-button';
import { JA_BUTTON, JA_INPUT } from '../../../resources//constants';
import JAInput from '../../common/ja-input';
import CheckBoxPUL from '../../common/checkbox-with-text';
import LanguageDropdown from '../../common/language-dropdown/languageDropdown';
import Footer from '../../common/footer/footer';

// TODO Replace these standard values with real values.
// These are used during development only.
// LanguageDropdown shows one language when first rendered even though
// no language is seleceted. Could lead to bugs
function getCreateUserJson(attributes) {
  return createJsonDataAttributes({
    email: attributes.email,
    password: attributes.password,
    consent: attributes.consent,
    system_language_id: attributes.appLanguage,
    first_name: attributes.first_name,
    last_name: attributes.last_name,
  });
}

class CreateAccountScreen extends Component {

  static propTypes = {
    setFirstName: React.PropTypes.func.isRequired,
    setLastName: React.PropTypes.func.isRequired,
    setEmail: React.PropTypes.func.isRequired,
    setPassword: React.PropTypes.func.isRequired,
    toggleCheckBox: React.PropTypes.func.isRequired,
    setAppLanguage: React.PropTypes.func.isRequired,
    account: React.PropTypes.shape({
      firstName: React.PropTypes.string,
      lastName: React.PropTypes.string,
      email: React.PropTypes.string,
      password: React.PropTypes.string,
      appLanguage: React.PropTypes.string,
      consent: React.PropTypes.bool,
    }).isRequired,
    goToLogin: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
  }

  createAccount() {
    this.props.signUp(getCreateUserJson(this.props.account));
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
                onChange={text => this.props.setFirstName(text)}
              />
            </Col>
            <Col>
              <JAInput
                typeOfInput={JA_INPUT.LAST_NAME}
                onChange={text => this.props.setLastName(text)}
              />
            </Col>
          </Grid>
          <JAInput
            typeOfInput={JA_INPUT.EMAIL}
            onChange={text => this.props.setEmail(text)}
          />
          <JAInput
            typeOfInput={JA_INPUT.PASSWORD}
            onChange={text => this.props.setPassword(text)}
          />
          <LanguageDropdown onChange={input => this.props.setAppLanguage(input)} />
          <CheckBoxPUL
            title={I18n.t('sign_up.accept_pul_and_terms')}
            isChecked={this.props.account.consent}
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
    setFirstName: input => dispatch(setFirstName(input)),
    setLastName: input => dispatch(setLastName(input)),
    setEmail: input => dispatch(setEmail(input)),
    setPassword: input => dispatch(setPassword(input)),
    toggleCheckBox: () => dispatch(toggleCheckBox()),
    setAppLanguage: input => dispatch(setAppLanguage(input)),
    signUp: (user, password) => dispatch(requestCreateUser(user, password)),
  };
}

const mapStateToProps = state => ({ account: state.userEdit.attributes });

export default connect(mapStateToProps, bindAction)(CreateAccountScreen);
