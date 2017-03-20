import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Text, Content, Left, Right, Item, Input, ListItem, Body, Thumbnail } from 'native-base';
import MyJobsStyles from './myJobsStyles';

const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';
const GREEN = 'https://upload.wikimedia.org/wikipedia/commons/5/50/WX_circle_green.png';
const GRAY = 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Solid_gray.png';
const alertMessage1 = 'Alert\n';

export default class Tab1 extends Component {

  render() {
    return (
      <Container>
        <Content>
          <Item underline>
            <Input placeholder="Pågående" />
          </Item>
          <ListItem avatar onPress={() => Alert.alert('Snöskottning', alertMessage1)}>
            <Left>
              <Thumbnail style={StyleSheet.flatten(MyJobsStyles.logo)} source={{ uri: LOGO_URL }} />
            </Left>
            <Body>
              <Text> Snöskottning </Text>
              <Text note> 14 April 20:00</Text>
            </Body>
            <Right>
              <Thumbnail style={StyleSheet.flatten(MyJobsStyles.logo2)} source={{ uri: GREEN }} />
            </Right>
          </ListItem>

          <ListItem avatar onPress={() => Alert.alert('Gräsklippning', alertMessage1)}>
            <Left>
              <Thumbnail style={StyleSheet.flatten(MyJobsStyles.logo)} source={{ uri: LOGO_URL }} />
            </Left>
            <Body>
              <Text> Gräsklippning </Text>
              <Text note> 11 Maj 10:00</Text>
            </Body>
            <Right>
              <Thumbnail style={StyleSheet.flatten(MyJobsStyles.logo2)} source={{ uri: GRAY }} />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
