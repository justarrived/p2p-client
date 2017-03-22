import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Col, Grid, ListItem, Form, Input, Item, CheckBox, Content, Button, Body, Label } from 'native-base';

export default class MakePaymentScreen extends Component {
  render() {
    return (
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Kortinnehavare</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Kortnummer</Label>
            <Input />
          </Item>
        </Form>
        <Form>
          <Grid>
            <Col>
              <Item floatingLabel>
                <Label>MM/ÅÅ</Label>
                <Input />
              </Item>
            </Col>
            <Col>
              <Item floatingLabel>
                <Label>CVC</Label>
                <Input />
              </Item>
            </Col>
          </Grid>
        </Form>
        <ListItem>
          <CheckBox checked={false} />
          <Body>
            <Text>Spara kort</Text>
          </Body>
        </ListItem>
        <View style={{ padding: 20 }}>
          <Button block success>
            <Text>Betala</Text>
          </Button>
          <Button block light>
            <Text>Avbryt</Text>
          </Button>
        </View>
      </Content>
    );
  }
}
