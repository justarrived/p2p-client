import React, { Component } from 'react';
import { View } from 'react-native';
import { CardItem, Spinner } from 'native-base';

import TextInput from '../../common/text-input';
import CardItemButton from '../../common/card-item-button/cardItemButton';

import { getUser, patchUserDescription } from '../../../networking/user';

class NetworkingUserDescription extends Component {
  static propTypes = {
    token: React.PropTypes.string.isRequired,
    userId: React.PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      hasChanged: false,
      description: '',
    };
  }

  componentDidMount() {
    getUser(this.props.userId, this.props.token,
    (response) => {
      this.setState({
        description: response.data.attributes.description,
        loading: false,
      });
    },
    error => console.warn(error));
  }

  updateUserText(description) {
    this.setState({
      hasChanged: true,
      description,
    });
  }

  uploadUserDescription() {
    patchUserDescription(this.props.userId, this.props.token,
      this.state.description,
      () => this.setState({ hasChanged: false }),
      error => console.warn(error));
  }

  render() {
    if (this.state.loading) {
      return (
        <Spinner color="blue" />
      );
    }
    return (
      <View>
        <CardItem>
          <TextInput
            title="user description"
            onChange={description => this.updateUserText(description)}
            defaultValue={this.state.description}
          />
        </CardItem>
        <CardItemButton
          onPress={() => this.uploadUserDescription()}
          text="Upload description"
          disabled={!this.state.hasChanged}
        />
      </View>
    );
  }
}

module.exports = NetworkingUserDescription;
