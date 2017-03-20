import React, { Component } from 'react';
import { View, Text, Image, ListView } from 'react-native';
import { Spinner } from 'native-base';
import MovieStyles from './movieStyles';

// URL JSON data is fetched from
const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

// Modified component based on react-native 0.19 tutorial
// http://facebook.github.io/react-native/releases/0.19/docs/tutorial.html
export default class MovieExample extends Component {

  // Constructor setting intitial state
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  // Called once component has been mounted
  componentDidMount() {
    // Setting a delay so there is always time to see the loading screen. Do NOT do this!
    setTimeout(
      () => {
        this.fetchData();
      },
      1000,
    );
  }

  // Fetch data from REQUEST_URL and update state
  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }

  // Render information about one movie
  renderMovie(movie) {
    return (
      <View style={MovieStyles.container}>
        <Image
          source={{ uri: movie.posters.thumbnail }}
          style={MovieStyles.thumbnail}
        />
        <View style={MovieStyles.rightContainer}>
          <Text style={MovieStyles.title}>{movie.title}</Text>
          <Text style={MovieStyles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }

  // Render the component
  render() {
    if (!this.state.loaded) {
      return (
        <Spinner color="blue" />
      );
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={MovieStyles.listView}
      />
    );
  }
}
