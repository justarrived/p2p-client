import React, { Component } from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import { Container, Text, Content, Left, Right, Item, Input, ListItem, Body, Thumbnail } from 'native-base';
import MyJobsStyles from './myJobsStyles';

const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';
const alertMessage1 = 'Alert\n';

export default class Tab3 extends Component {

  render() {
    return (
      <Container>
        <Container>
          <Content>
            <Item underline>
              <Input placeholder="Att Avsluta" />
            </Item>
            <ListItem avatar onPress={() => Alert.alert('Snöskottning', alertMessage1)}>
              <Left>
                <Thumbnail
                  style={StyleSheet.flatten(MyJobsStyles.logo)} source={{ uri: LOGO_URL }}
                />
              </Left>
              <Body>
                <Text> Snöskottning </Text>
                <Text note> 14 April 20:00</Text>
              </Body>
              <Right>
                <View style={StyleSheet.flatten(MyJobsStyles.blue)}>
                  <Text style={StyleSheet.flatten(MyJobsStyles.badgeText)}>Avslutade</Text>
                </View>
              </Right>
            </ListItem>
            <ListItem avatar onPress={() => Alert.alert('Gräsklippning', alertMessage1)}>
              <Left>
                <Thumbnail
                  style={StyleSheet.flatten(MyJobsStyles.logo)} source={{ uri: LOGO_URL }}
                />
              </Left>
              <Body>
                <Text> Gräsklippning </Text>
                <Text note> 11 Maj 10:00</Text>
              </Body>
              <Right>
                <View style={StyleSheet.flatten(MyJobsStyles.blue)}>
                  <Text style={StyleSheet.flatten(MyJobsStyles.badgeText)}>Avslutade</Text>
                </View>
              </Right>
            </ListItem>
          </Content>
        </Container>
      </Container>
    );
  }
}
