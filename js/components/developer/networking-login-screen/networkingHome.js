import React, { Component } from 'react';
import { Text } from 'react-native';
import { Content, Card, CardItem } from 'native-base';
import { connect } from 'react-redux';

import CardItemButton from '../../common/card-item-button/cardItemButton';
import NetworkingUserDescription from './networkingUserDescription';
import { requestSignOut } from '../../../actions/session';

class NetworkingHome extends Component {
  static propTypes = {
    signOut: React.PropTypes.func.isRequired,
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
    this.props.signOut(this.props.token);
  }

  render() {
    // console.log('render FirebaseHome');
    return (
      <Content>
        <Card>
          <CardItem>
            <Text >{this.state.greeting}</Text>
          </CardItem>
          <NetworkingUserDescription />
          <CardItemButton
            onPress={() => this.signOut()}
            text="log out"
          />
        </Card>
      </Content>
    );
  }
}

// props tied together with Redux state
const mapStateToProps = state => ({
  token: state.session.token,
  userId: state.session.userId,
});

// props tied together with Redux methods
function bindAction(dispatch) {
  return {
    signOut: token => dispatch(requestSignOut(token)),
  };
}

// Connect class with Redux and export
export default connect(mapStateToProps, bindAction)(NetworkingHome);
