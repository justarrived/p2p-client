import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ListView } from 'react-native';
import { Container, Content, Spinner } from 'native-base';

// URL JSON data if fetched from
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
      1000
    );
  }

  // Fetch data from REQUEST_URL and update state
  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }

  // Render the component
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
    );
  }

  // Render loading screen
  renderLoadingView() {
    return ( <Spinner color='blue' /> );
  }

  // Render information about one movie
  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
   flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  listView: {
   paddingTop: 20,
   backgroundColor: '#F5FCFF',
 },
});
