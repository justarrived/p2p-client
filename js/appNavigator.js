
import React, { Component } from 'react';
import { BackAndroid, StatusBar, NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';


import Home from './components/home/';
import IndexScene from './index.scene';
import Dev from './components/dev/';
import Login from './components/login/';


const {
  popRoute,
} = actions;

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

class AppNavigator extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
      routes: React.PropTypes.array,
    }),
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      const routes = this.props.navigation.routes;

      if (routes[routes.length - 1].key === 'home') {
        return false;
      }

      this.props.popRoute(this.props.navigation.key);
      return true;
    });
  }


  popRoute() {
    this.props.popRoute();
  }

  _renderScene(props) { // eslint-disable-line class-methods-use-this
    switch (props.scene.route.key) {
      case 'home':
        return <Home />;
     case 'dev':
        return <Dev />;
      case 'index':
        return <IndexScene />;
      case 'login':
        return <Login />;
      default :
        return <Home />;
    }
  }

  render() {

    return (
        <NavigationCardStack
          navigationState={this.props.navigation}
          renderOverlay={this._renderOverlay}
          renderScene={this._renderScene}
        />

    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
