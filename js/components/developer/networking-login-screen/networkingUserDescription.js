import React, { Component } from 'react';
import { View } from 'react-native';
import { CardItem, Spinner } from 'native-base';

import TextInput from '../../common/text-input';
import CardItemButton from '../../common/card-item-button/cardItemButton';

class NetworkingUserDescription extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      hasChanged: false,
      userText: '',
    };
  }

  componentDidMount() {
    /* User.getUserText(
      (text) => {
        this.setState({
          userText: text,
          loading: false,
        });
      },
      error => console.warn(error));*/
  }

  updateUserText(text) {
    this.setState({
      hasChanged: true,
      userText: text,
    });
  }

  uploadUserText() {
    // User.setUserText(this.state.userText);
    this.setState({
      hasChanged: false,
    });
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
            title="user text"
            onChange={text => this.updateUserText(text)}
            defaultValue={this.state.userText}
          />
        </CardItem>
        <CardItemButton
          onPress={() => this.uploadUserText()}
          text="Submit user text"
          disabled={!this.state.hasChanged}
        />
      </View>
    );
  }
}

module.exports = NetworkingUserDescription;
