import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Content, Form, Col, Row, Thumbnail, Card, CardItem, Button, Text } from 'native-base';
import JASpinner from '../../common/ja-spinner/JASpinner';
import style from './profileInfoStyle';
import GlobalStyle from '../../../resources/globalStyle';
import EmailInput from '../../common/email-input';
import PhoneInput from '../../common/numeric-input';
import TextInput from '../../common/text-input';
import PostcodeInput from '../../common/post-code-input';
import EditButtons from './editButtons';
import I18n from '../../../i18n';
import { setAddress, setPostCode, setPostArea, setPhoneNumber,
  setEmail, toggleInputDisabled } from '../../../actions/userEdit';
import { createJsonDataAttributes } from '../../../networking/json';
import { requestGetUser, requestPatchUser } from '../../../actions/user';
import { requestSignOut } from '../../../actions/session';

const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';

class ProfileInfo extends React.Component {

  static propTypes = {
    userId: React.PropTypes.number.isRequired,
    toggleInputDisabled: PropTypes.func.isRequired,
    setAddress: PropTypes.func.isRequired,
    setPostCode: PropTypes.func.isRequired,
    setPostArea: PropTypes.func.isRequired,
    setPhoneNumber: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    attributes: PropTypes.objectOf(PropTypes.any).isRequired,
    editDisabled: PropTypes.bool.isRequired,
    signOut: PropTypes.func.isRequired,
    requestGetUser: PropTypes.func.isRequired,
    requestPatchUser: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    if (this.props.loading) {
      this.props.requestGetUser(this.props.userId, this.props.token);
    }
  }

  saveEdit() {
    const json = createJsonDataAttributes(this.props.attributes);
    this.props.requestPatchUser(this.props.userId, this.props.token, json);
    // TODO only toggle if success
    this.props.toggleInputDisabled();
  }

  cancelEdit() {
    this.props.toggleInputDisabled();
    // TODO reset redux state
  }

  signOut() {
    this.props.signOut(this.props.token);
  }

  render() {
    if (this.props.loading) {
      return <JASpinner />;
    }
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
            </Form>
          </CardItem>
          <CardItem bordered style={StyleSheet.flatten(style.buttonContainer)}>
            <Col>
              <EditButtons
                disabled={this.props.editDisabled}
                onEdit={() => this.props.toggleInputDisabled()}
                onCancel={() => this.cancelEdit()}
                onSave={() => this.saveEdit()}
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
  userId: state.session.userId,
  loading: !state.userEdit.initialized || state.user.userLoading,
});

function bindAction(dispatch) {
  return {
    setAddress: input => dispatch(setAddress(input)),
    setPostCode: input => dispatch(setPostCode(input)),
    setPostArea: input => dispatch(setPostArea(input)),
    setPhoneNumber: input => dispatch(setPhoneNumber(input)),
    setEmail: input => dispatch(setEmail(input)),
    toggleInputDisabled: () => dispatch(toggleInputDisabled()),
    requestGetUser: (userId, token) => dispatch(requestGetUser(userId, token, true)),
    requestPatchUser: (userId, token, json) =>
      dispatch(requestPatchUser(userId, token, json, true)),
    signOut: token => dispatch(requestSignOut(token)),
  };
}

export default connect(mapStateToProps, bindAction)(ProfileInfo);
