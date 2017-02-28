import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content,Footer, FooterTab, Text, Button, Icon } from 'native-base';
import { setIndex } from '../../actions/list';

const {
  popRoute,
  reset,
  pushRoute,
} = actions;

class Login extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

    reset() {
      this.props.reset(this.props.navigation.key);
    }

    popRoute() {
      this.props.popRoute(this.props.navigation.key);
    }

    pushRoute(route, index) {
      this.props.setIndex(index);
      this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
    }

  render() {
      return (
        <Container >
          <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>
            <Title>Login Page</Title>
          </Header>

          <Content>
            <Text>I Login</Text>
          </Content>

          <Footer >
            <FooterTab>
              <Button onPress={() => this.reset()}>
                <Text>Home</Text>
              </Button>
              <Button active >
                <Text>Dev</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
    }
}

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
    setIndex: index => dispatch(setIndex(index)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({

  list: state.list.list,
  navigation: state.cardNavigation,

});

export default connect(mapStateToProps, bindAction)(Login);
