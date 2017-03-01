import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content,Footer, FooterTab, Text, Button, Icon } from 'native-base';



const {
  reset,
  pushRoute,
} = actions;

class Dev extends Component {

  static propTypes = {
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

  pushRoute(route, index) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  render() {
      return (
        <Container >
          <Header>
            <Title>Dev Page</Title>
          </Header>

          <Content>
            <Text>I Dev</Text>
            <Button onPress={() => this.pushRoute('login', 1)}>
              <Text>Login</Text>
            </Button>
            <Text>
        </Text>

          </Content>

          <Footer >
            <FooterTab>
              <Button onPress={() => this.reset()}>
                <Text>Home</Text>
              </Button>
              <Button active>
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
    //setIndex: index => dispatch(setIndex(index)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({

  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Dev);
