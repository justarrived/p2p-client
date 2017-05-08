import React, { PropTypes } from 'react';
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
import { setAddress, setPostCode, setPostArea, setPhoneNumber, setEmail, setPassword, toggleInputDisabled } from '../../../actions/userEdit';
import { requestSignOut } from '../../../actions/session';

const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';

class ProfileInfo extends React.Component {

  static propTypes = {
    toggleInputDisabled: PropTypes.func.isRequired,
    setAddress: PropTypes.func.isRequired,
    setPostCode: PropTypes.func.isRequired,
    setPostArea: PropTypes.func.isRequired,
    setPhoneNumber: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    attributes: PropTypes.objectOf(PropTypes.any).isRequired,
    editDisabled: PropTypes.bool.isRequired,
    signOut: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
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
                <Text>{this.props.attributes.first_name} {this.props.attributes.last_name}</Text>
              </Text>
            </View>
          </CardItem>
          <CardItem bordered style={StyleSheet.flatten(style.formContainer)}>
            <Form style={StyleSheet.flatten(style.form)}>
              <TextInput
                title={I18n.t('account.address')}
                onChange={input => this.props.setAddress(input)}
                disabled={this.props.editDisabled}
                defaultValue={this.props.attributes.street}
              />
              <Row>
                <Col>
                  <PostcodeInput
                    title={I18n.t('account.postal_code')}
                    onChange={input => this.props.setPostCode(input)}
                    disabled={this.props.editDisabled}
                    defaultValue={this.props.attributes.zip}
                  />
                </Col>
                <Col>
                  <TextInput
                    title={I18n.t('account.city')}
                    onChange={input => this.props.setPostArea(input)}
                    disabled={this.props.editDisabled}
                    defaultValue={this.props.attributes.city}
                  />
                </Col>
              </Row>
              <PhoneInput
                title={I18n.t('account.phone_number')}
                onChange={input => this.props.setPhoneNumber(input)}
                disabled={this.props.editDisabled}
                defaultValue={this.props.attributes.phone}
              />
              <EmailInput
                title={I18n.t('account.email')}
                onChange={input => this.props.setEmail(input)}
                disabled={this.props.editDisabled}
                defaultValue={this.props.attributes.email}
              />
              <PasswordInput
                title={I18n.t('account.password')}
                onChange={input => this.props.setPassword(input)}
                disabled={this.props.editDisabled}
                defaultValue={this.props.attributes.password}
              />
            </Form>
          </CardItem>
          <CardItem bordered style={StyleSheet.flatten(style.buttonContainer)}>
            <Col>
              <EditButtons
                disabled={this.props.editDisabled}
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
  attributes: state.userEdit.attributes,
  editDisabled: state.userEdit.disabled,
  token: state.session.token,
});

function bindAction(dispatch) {
  return {
    setAddress: input => dispatch(setAddress(input)),
    setPostCode: input => dispatch(setPostCode(input)),
    setPostArea: input => dispatch(setPostArea(input)),
    setPhoneNumber: input => dispatch(setPhoneNumber(input)),
    setEmail: input => dispatch(setEmail(input)),
    setPassword: input => dispatch(setPassword(input)),
    toggleInputDisabled: () => dispatch(toggleInputDisabled()),
    signOut: token => dispatch(requestSignOut(token)),
  };
}

export default connect(mapStateToProps, bindAction)(ProfileInfo);
