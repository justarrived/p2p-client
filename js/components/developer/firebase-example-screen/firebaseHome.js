import React, { Component } from 'react';
import { Text } from 'react-native';
import { Content, Card, CardItem } from 'native-base';

import CardItemButton from '../../common/card-item-button/cardItemButton';
import FirebaseUserText from './firebaseUserText';
import Auth from './networking/auth';

class FirebaseHome extends Component {
  static propTypes = {
    onLogout: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Welcome',
    };
  }

  signOut() {
    Auth.signOut(() => this.props.onLogout(),
      () => this.setState({ greeting: 'Unable to sign out' }));
  }

  render() {
    // console.log('render FirebaseHome');
    return (
      <Content>
        <Card>
          <CardItem>
            <Text >{this.state.greeting} {Auth.getCurrentUser().email}</Text>
          </CardItem>
          <FirebaseUserText />
          <CardItemButton
            onPress={() => this.signOut()}
            text="log out"
          />
        </Card>
      </Content>
    );
  }
}

module.exports = FirebaseHome;
