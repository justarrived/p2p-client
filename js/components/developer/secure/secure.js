import React, { Component, PropTypes } from 'react';
import { Spinner } from 'native-base';
import { connect } from 'react-redux';
import AuthenticationScreen from '../authentication-screen';

/*
  Renders children components if the user is authenticated.
  Otherwise an authentication screen is displayed.
*/
class Secure extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
  }

  render() {
    const { authenticated, loading, children } = this.props;

    // Render children component(s) if the user is authenticated
    if (authenticated) {
      return children;
    }

    // Display loading spinner while authenticating
    if (loading) {
      return <Spinner color="blue" />;
    }

    // Else open the authentication screen
    return (
      <AuthenticationScreen />
    );
  }
}

// Props tied together with Redux state
const mapStateToProps = state => ({
  authenticated: state.session.token != null,
  loading: state.session.sessionLoading || state.user.userLoading,
});

// Connect class with Redux and export
export default connect(mapStateToProps)(Secure);
