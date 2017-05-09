import React, { PropTypes, Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Content, Col, Thumbnail, Card, CardItem, Button, Text } from 'native-base';
import ProfileInputFields from './profileInputFields';
import JASpinner from '../../common/ja-spinner/JASpinner';
import style from './profileInfoStyle';
import GlobalStyle from '../../../resources/globalStyle';
import EditButtons from './editButtons';
import I18n from '../../../i18n';
import { toggleEditDisabled, setAttributes } from '../../../actions/userEdit';
import { createJsonDataAttributes } from '../../../networking/json';
import { requestGetUser, requestPatchUser } from '../../../actions/userProfile';
import { requestSignOut } from '../../../actions/session';

class ProfileInfo extends Component {

  static propTypes = {
    userId: React.PropTypes.number.isRequired,
    toggleEditDisabled: PropTypes.func.isRequired,
    setAttributes: PropTypes.func.isRequired,
    attributes: PropTypes.objectOf(PropTypes.any).isRequired,
    editDisabled: PropTypes.bool.isRequired,
    signOut: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
    patchUser: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    userError: React.PropTypes.objectOf(React.PropTypes.any),
    userJson: React.PropTypes.objectOf(React.PropTypes.any),
  }
  static defaultProps = {
    userError: null,
    userJson: null,
  }

  componentDidMount() {
    if (this.props.loading) {
      // If not initialized get data
      this.initializeUserData();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loading && !nextProps.loading
      && nextProps.userError === null) {
      // loading done with no error => edit done
      this.props.toggleEditDisabled(true);
    }
  }

  // Download profile data from API
  getUserData() {
    this.props.getUser(this.props.userId, this.props.token);
  }

  initializeUserData() {
    if (this.props.userJson != null) {
      // If local data exists use it
      this.props.setAttributes(this.props.userJson.data.attributes);
      this.props.toggleEditDisabled(true);
    } else {
      // Fetch data from API
      this.getUserData();
    }
  }

  // method called to save local change towards the API
  saveEdit() {
    const json = createJsonDataAttributes(this.props.attributes);
    this.props.patchUser(this.props.userId, this.props.token, json);
  }

  // Method called to stop editing and reset local change
  cancelEdit() {
    this.initializeUserData();
  }

  // User signs off and local data is removed
  signOut() {
    this.props.signOut(this.props.token);
  }

  render() {
    if (this.props.userError != null) {
      // TODO handle errors
    }
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
                source={{ uri: `https://api.adorable.io/avatars/140/${this.props.attributes.email}` }}
              />
              <Text style={StyleSheet.flatten(style.nameText)}>
                <Text>{this.props.attributes.first_name} {this.props.attributes.last_name}</Text>
              </Text>
            </View>
          </CardItem>
          <ProfileInputFields />
          <CardItem bordered style={StyleSheet.flatten(style.buttonContainer)}>
            <Col>
              <EditButtons
                disabled={this.props.editDisabled}
                onEdit={() => this.props.toggleEditDisabled(false)}
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
  loading: !state.userEdit.initialized || state.userProfile.userLoading,
  userError: state.userProfile.error,
  userJson: state.userProfile.userJson,
});

function bindAction(dispatch) {
  return {
    toggleEditDisabled: enable => dispatch(toggleEditDisabled(enable)),
    setAttributes: attributes => dispatch(setAttributes(attributes)),
    getUser: (userId, token) => dispatch(requestGetUser(userId, token)),
    patchUser: (userId, token, json) =>
      dispatch(requestPatchUser(userId, token, json)),
    signOut: token => dispatch(requestSignOut(token)),
  };
}

export default connect(mapStateToProps, bindAction)(ProfileInfo);
