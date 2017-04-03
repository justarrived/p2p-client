import React, { Component } from 'react';
import { Text } from 'react-native';
import { Spinner } from 'native-base';
import webAppStyles from './webAppStyles';
import { getJson } from '../../../networking/networking';

export default class WebAppHourlyWage extends Component {
  static propTypes = {
    url: React.PropTypes.string.isRequired,
  }

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
    getJson(this.props.url,
      (responseJson) => {
        this.setState({
          data: responseJson.data,
          loading: false,
        });
      },
      (error) => {
        console.warn(error);
        this.setState({
          loading: false,
          error: true,
        });
      });
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
      <Text style={webAppStyles.textRight}>
        <Text >{this.state.data.attributes['gross-salary']}</Text>
        <Text > {this.state.data.attributes.currency}/TIMME</Text>
      </Text>
    );
  }
}
