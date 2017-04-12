import React, { Component } from 'react';
import { View } from 'react-native';
import { CardItem, Spinner } from 'native-base';
import { connect } from 'react-redux';

import TextInput from '../../common/text-input';
import CardItemButton from '../../common/card-item-button/cardItemButton';

import { createJsonDataAttributes } from '../../../networking/json';
import { requestPatchUser, requestGetUser } from '../../../actions/user';

class NetworkingUserDescription extends Component {
  static propTypes = {
    token: React.PropTypes.string.isRequired,
    userId: React.PropTypes.number.isRequired,
    updateUser: React.PropTypes.func.isRequired,
    getUser: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool.isRequired,
    // userError: React.PropTypes.object,
    userJson: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      startup: true,
      description: '',
    };
  }

  componentDidMount() {
    this.props.getUser(this.props.userId, this.props.token);
  }

  updateUserText(description) {
    this.setState({
      startup: false,
      description,
    });
  }

  uploadUserDescription() {
    const json = createJsonDataAttributes({
      description: this.state.description,
    });
    this.props.updateUser(this.props.userId, this.props.token, json);
  }

  render() {
    if (this.props.loading || this.props.userJson === null) {
      return (
        <Spinner color="blue" />
      );
    }
    const apiDescription = this.props.userJson.data.attributes.description;
    const disableUpload = this.state.startup || this.state.description === apiDescription;
    return (
      <View>
        <CardItem>
          <TextInput
            title="user description"
            onChange={description => this.updateUserText(description)}
            defaultValue={apiDescription}
          />
        </CardItem>
        <CardItemButton
          onPress={() => this.uploadUserDescription()}
          text="Upload description"
          disabled={disableUpload}
        />
      </View>
    );
  }
}

NetworkingUserDescription.defaultProps = {
  userJson: null,
};

// props tied together with Redux state
const mapStateToProps = state => ({
  token: state.session.token,
  userId: state.session.userId,
  loading: state.user.userLoading,
  // userError: state.user.error,
  userJson: state.user.userJson,
});

// props tied together with Redux methods
function bindAction(dispatch) {
  return {
    updateUser: (userId, token, json) => {
      dispatch(requestPatchUser(userId, token, json));
    },
    getUser: (userId, token) => {
      dispatch(requestGetUser(userId, token));
    },
  };
}

// Connect class with Redux and export
export default connect(mapStateToProps, bindAction)(NetworkingUserDescription);
