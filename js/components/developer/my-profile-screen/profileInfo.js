import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Content, Form, Col, Row, Thumbnail, Card, CardItem, Button, Text } from 'native-base';
import style from './profileInfoStyle';
import GlobalStyle from '../../../resources/globalStyle';
import EmailInput from '../../common/email-input';
import PhoneInput from '../../common/numeric-input';
import PasswordInput from '../../common/password-input';
import TextInput from '../../common/text-input';
import PostcodeInput from '../../common/post-code-input';
import EditButtons from './editButtons';
import I18n from '../../../i18n';
import { changeAddress, changePostCode, changePostArea, changePhoneNumber, changeEmail, changePassword, toggleInputDisabled } from '../../../actions/account';
import { requestSignOut } from '../../../actions/session';

const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';

class ProfileInfo extends React.Component {

  static propTypes = {
    toggleInputDisabled: React.PropTypes.func.isRequired,
    changeAddress: React.PropTypes.func.isRequired,
    changePostCode: React.PropTypes.func.isRequired,
    changePostArea: React.PropTypes.func.isRequired,
    changePhoneNumber: React.PropTypes.func.isRequired,
    changeEmail: React.PropTypes.func.isRequired,
    changePassword: React.PropTypes.func.isRequired,
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
    signOut: React.PropTypes.func.isRequired,
    token: React.PropTypes.string.isRequired,
  }

  signOut() {
    this.props.signOut(this.props.token);
  }

  render() {
    return (
      <Content contentContainerStyle={GlobalStyle.padder}>
        <Card>
          <CardItem bordered style={StyleSheet.flatten(style.topContainer)}>
            <View>
              <Thumbnail
                style={StyleSheet.flatten(style.logo)}
                source={{ uri: LOGO_URL }}
              />
              <Text style={StyleSheet.flatten(style.nameText)}>
                <Text>{this.props.account.firstName} {this.props.account.lastName}</Text>
              </Text>
            </View>
          </CardItem>
          <CardItem bordered style={StyleSheet.flatten(style.formContainer)}>
            <Form style={StyleSheet.flatten(style.form)}>
              <TextInput
                title={I18n.t('account.address')}
                onChange={input => this.props.changeAddress(input)}
                disabled={this.props.account.disabled}
              />
              <Row>
                <Col>
                  <PostcodeInput
                    title={I18n.t('account.postal_code')}
                    onChange={input => this.props.changePostCode(input)}
                    disabled={this.props.account.disabled}
                    defaultValue="41253"
                  />
                </Col>
                <Col>
                  <TextInput
                    title={I18n.t('account.city')}
                    onChange={input => this.props.changePostArea(input)}
                    disabled={this.props.account.disabled}
                    defaultValue="Göteborg"
                  />
                </Col>
              </Row>
              <PhoneInput
                title={I18n.t('account.phone_number')}
                onChange={input => this.props.changePhoneNumber(input)}
                disabled={this.props.account.disabled}
                defaultValue="0707979836"
              />
              <EmailInput
                title={I18n.t('account.email')}
                onChange={input => this.props.changeEmail(input)}
                disabled={this.props.account.disabled}
                defaultValue="anton_smith@gmail.com"
              />
              <PasswordInput
                title={I18n.t('account.password')}
                onChange={input => this.props.changePassword(input)}
                disabled={this.props.account.disabled}
                defaultValue="00000000"
              />
            </Form>
          </CardItem>
          <CardItem bordered style={StyleSheet.flatten(style.buttonContainer)}>
            <Col>
              <EditButtons
                disabled={this.props.account.disabled}
                onEdit={() => this.props.toggleInputDisabled()}
                onCancel={() => this.props.toggleInputDisabled()}
                onSave={() => console.log('save change...')}
              />
              <Button
                small block bordered
                style={StyleSheet.flatten(style.logoutButton)}
                onPress={() => this.signOut()}
              >
                <Text>{I18n.t('sign_out.sign_out_button')}</Text>
              </Button>
            </Col>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  account: state.account,
  token: state.session.token,
});

function bindAction(dispatch) {
  return {
    changeAddress: input => dispatch(changeAddress(input)),
    changePostCode: input => dispatch(changePostCode(input)),
    changePostArea: input => dispatch(changePostArea(input)),
    changePhoneNumber: input => dispatch(changePhoneNumber(input)),
    changeEmail: input => dispatch(changeEmail(input)),
    changePassword: input => dispatch(changePassword(input)),
    toggleInputDisabled: () => dispatch(toggleInputDisabled()),
    signOut: token => dispatch(requestSignOut(token)),
  };
}

export default connect(mapStateToProps, bindAction)(ProfileInfo);
