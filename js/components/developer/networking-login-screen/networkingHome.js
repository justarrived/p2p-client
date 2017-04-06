import React, { Component } from 'react';
import { Text } from 'react-native';
import { Content, Card, CardItem } from 'native-base';

import CardItemButton from '../../common/card-item-button/cardItemButton';
import NetworkingUserDescription from './networkingUserDescription';
import { signOut } from '../../../networking/auth';

class NetworkingHome extends Component {
  static propTypes = {
    onLogout: React.PropTypes.func.isRequired,
    token: React.PropTypes.string.isRequired,
    userId: React.PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      greeting: `Welcome user ${props.userId}`,
    };
  }

  signOut() {
    signOut(this.props.token,
      () => this.props.onLogout(),
      error => this.setState({ greeting: `Unable to sign out: ${error}` }));
  }

  render() {
    // console.log('render FirebaseHome');
    return (
      <Content>
        <Card>
          <CardItem>
            <Text >{this.state.greeting}</Text>
          </CardItem>
          <NetworkingUserDescription
            token={this.props.token}
            userId={this.props.userId}
          />
          <CardItemButton
            onPress={() => this.signOut()}
            text="log out"
          />
        </Card>
      </Content>
    );
  }
}

module.exports = NetworkingHome;
