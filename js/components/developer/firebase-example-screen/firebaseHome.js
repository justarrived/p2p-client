import React, { Component } from 'react';
import { Text } from 'react-native';
import { Content, Card, CardItem } from 'native-base';
import * as firebase from 'firebase';

import CardItemButton from '../common/cardItemButton';

class FirebaseHome extends Component {
  static propTypes = {
    onLogout: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      userInfo: 'nothing to see here',
      error: false,
      errorMessage: '',
    };
  }

  async logout() {
    await firebase.auth()
      .signOut()
      .then(() => this.props.onLogout())
      .catch(error => console.warn(error));
  }

  render() {
    // console.log('render FirebaseHome');
    return (
      <Content>
        <Card>
          <CardItem>
            <Text >Welcome {firebase.auth().currentUser.email}</Text>
          </CardItem>
          <CardItemButton
            onPress={() => this.logout()}
            text="log out"
          />
        </Card>
      </Content>
    );
  }
}

module.exports = FirebaseHome;
