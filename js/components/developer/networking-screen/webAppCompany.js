import React, { Component } from 'react';
import { Text } from 'react-native';
import { Spinner } from 'native-base';
import webAppStyles from './webAppStyles';

export default class WebAppCompany extends Component {
  static propTypes = {
    url: React.PropTypes.string.isRequired,
    city: React.PropTypes.string,
  };
  static defaultProps = {
    city: 'Unknown City',
  };

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      loading: true,
      error: false,
    };
  }

  // Called once component has been mounted for the first time
  componentDidMount() {
    // Setting a delay so there is always time to see the loading screen. Do NOT do this!
    setTimeout(
      () => {
        this.fetchData();
      },
      500,
    );
  }

  // Fetch data from this.props.url and update state
  fetchData() {
    fetch(this.props.url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('Response was not 200 OK!');
      })
      .then((responseJson) => {
        this.setState({
          data: responseJson.data,
          loading: false,
        });
      }).catch((error) => {
        console.warn(error);
        this.setState({
          loading: false,
          error: true,
        });
      })
      .done();
  }

  // Render the component
  render() {
    if (this.state.loading) {
      return (
        <Spinner color="blue" />
      );
    }
    if (this.state.error) {
      return (
        <Text >Failed to load</Text>
      );
    }
    return (
      <Text >
        <Text style={webAppStyles.textCompany}>{this.state.data.attributes.name}</Text>
        <Text style={webAppStyles.textLeft}> {this.props.city}</Text>
      </Text>
    );
  }
}