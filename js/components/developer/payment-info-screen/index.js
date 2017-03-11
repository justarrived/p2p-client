import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Col, Grid, ListItem, Form, Input, Item, CheckBox, Content, Button, Body, Label } from 'native-base';

export default class MakePaymentScreen extends Component {
  render() {
    return (
      <Content>
        <Form>
          <ListItem>
            <Text>Kort 1</Text>
          </ListItem>
          <ListItem>
            <Text>Kort 2</Text>
          </ListItem>
          <ListItem>
            <Text>Kort 3</Text>
          </ListItem>
        </Form>
        <View style={{ padding: 20 }}>
          <Button block light>
            <Text>Lägg Till Kort</Text>
          </Button>
        </View>
      </Content>
    );
  }
}
