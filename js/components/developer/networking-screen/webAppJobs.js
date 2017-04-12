import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { Spinner, Card, CardItem, Body, Left, Right } from 'native-base';
import webAppStyles from './webAppStyles';
import WebAppHourlyWage from './webAppHourlyWage';
import WebAppCompany from './webAppCompany';
import { getJson } from '../../../networking/networking';

// URL JSON data is fetched from
const REQUEST_URL = 'https://api.justarrived.se/api/v1/jobs/';

export default class WebAppJobs extends Component {

  // Constructor setting intitial state
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
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

  // Fetch data from REQUEST_URL and update state
  fetchData() {
    getJson(REQUEST_URL,
      (responseJson) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson.data),
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
        <Text >Failed to load {REQUEST_URL}</Text>
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
                <WebAppCompany
                  url={rowData.relationships.company.links.self}
                  city={rowData.attributes.city}
                />
                <Text style={webAppStyles.textContent}>{rowData.attributes.short_description}</Text>
                <Text >
                  <Text style={webAppStyles.textMoney}>{rowData.attributes.amount}</Text>
                  <Text style={webAppStyles.textCurrency}> {rowData.attributes.currency}</Text>
                  <Text style={webAppStyles.textLeft}> BRUTTOLÖN</Text>
                </Text>
              </Body>
            </CardItem>
            <CardItem >
              <Left >
                <Text style={webAppStyles.textLeft}>{rowData.attributes.hours} TIMMAR</Text>
              </Left>
              <Right >
                <WebAppHourlyWage url={rowData.relationships.hourly_pay.links.self} />
              </Right>
            </CardItem>
          </Card>
        }
      />
    );
  }
}
