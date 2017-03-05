import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { Spinner, Card, CardItem, Body, Left, Right } from 'native-base';
import webAppStyles from './webAppStyles';

// URL JSON data is fetched from
const REQUEST_URL = 'https://api.justarrived.se/api/v1/jobs/';

// Modified component based on react-native 0.19 tutorial
// http://facebook.github.io/react-native/releases/0.19/docs/tutorial.html
export default class WebAppJobs extends Component {

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
          dataSource: this.state.dataSource.cloneWithRows(responseData.data),
          loaded: true,
        });
      })
      .done();
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
        renderRow={rowData =>
          <Card bordered="true" >
            <CardItem bordered="true">
              <Body >
                <Text style={webAppStyles.textTitle}>{rowData.attributes.name}</Text>
                <Text style={webAppStyles.textContent}>{rowData.attributes['short-description']}</Text>
                <Text >
                  <Text style={webAppStyles.textMoney}>{rowData.attributes.amount}</Text>
                  <Text style={webAppStyles.textCurrency}> {rowData.attributes.currency}</Text>
                </Text>
              </Body>
            </CardItem>
            <CardItem >
              <Left >
                <Text style={webAppStyles.textLeft}>{rowData.attributes.hours} TIMMAR</Text>
              </Left>
              <Right >
                <Text style={webAppStyles.textRight}>XXX {rowData.attributes.currency}/TIMME</Text>
              </Right>
            </CardItem>
          </Card>
        }
      />
    );
  }
}
