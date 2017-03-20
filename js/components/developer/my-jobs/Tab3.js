import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, Content, Left, Icon, Right, Item, Input, ListItem, Body, Thumbnail } from 'native-base';
import MyJobsStyles from './myJobsStyles';

const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';
const BLUE = 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Solid_blue.png';

export default class Tab3 extends Component {

  render() {
    return (
      <Container>
        <Container>
          <Content>
            <Item underline>
              <Input placeholder="Att Avsluta" />
            </Item>
            <ListItem avatar>
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
                <Thumbnail
                  style={StyleSheet.flatten(MyJobsStyles.logo2)} source={{ uri: BLUE }}
                />
              </Right>
            </ListItem>
            <ListItem avatar>
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
                <Thumbnail
                  style={StyleSheet.flatten(MyJobsStyles.logo2)} source={{ uri: BLUE }}
                />
              </Right>
            </ListItem>
          </Content>
        </Container>
      </Container>
    );
  }
}
