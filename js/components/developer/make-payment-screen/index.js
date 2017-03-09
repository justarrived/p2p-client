import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import {
  Container,
  ListItem,
  Form,
  Input,
  Tab,
  Tabs,
  Item,
  Header,
  CheckBox,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Label,
} from 'native-base';

export default class MakePaymentScreen extends Component {
  render() {
    return (

      <Container>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Kortinnehavare</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
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
                <Item floatingLabel last>
                  <Label>CVC</Label>
                  <Input />
                </Item>
              </Col>
            </Grid>
          </Form>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>
                Spara kort</Text>
            </Body>
          </ListItem>

          <View
            style={{
              padding: 20,
            }}
          >
            <Button block success>
              <Text>Betala</Text>
            </Button>
            <Button block light>
              <Text>Avbryt</Text>
            </Button>
          </View>

        </Content>

      </Container>

    );
  }
}
