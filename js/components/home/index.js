import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content,Footer, FooterTab, Text, Button, Icon } from 'native-base';

const {
  reset,
  pushRoute,
} = actions;

class Home extends Component {

  static propTypes = {
    pushRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

    pushRoute(route, index) {
      this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
    }

  render() {
      return (
        <Container >
          <Header>
            <Title>Home Page</Title>
          </Header>

          <Content>
            <Text>I Home</Text>
          </Content>

          <Footer >
            <FooterTab>
              <Button active>
                <Text>Home</Text>
              </Button>
              <Button onPress={() => this.pushRoute('dev', 1)}>
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
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,

});

export default connect(mapStateToProps, bindAction)(Home);
