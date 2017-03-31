import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Content, Text, Col, Grid, ListItem, Form, Input,
  Item, CheckBox, Button, Body, Label, Card, CardItem,
} from 'native-base';
import styles from './style';
import GlobalStyle from '../../common/globalStyle';

export default class MakePaymentScreen extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <Card>
            <CardItem bordered style={StyleSheet.flatten(styles.formContainer)}>
              <Form style={StyleSheet.flatten(styles.form)}>
                <Item floatingLabel>
                  <Label>Kortinnehavare</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Kortnummer</Label>
                  <Input keyboardType="numeric" />
                </Item>
                <Grid>
                  <Col>
                    <Item floatingLabel>
                      <Label>MM/ÅÅ</Label>
                      <Input keyboardType="numeric" />
                    </Item>
                  </Col>
                  <Col>
                    <Item floatingLabel>
                      <Label>CVC</Label>
                      <Input keyboardType="numeric" />
                    </Item>
                  </Col>
                </Grid>
                <ListItem>
                  <CheckBox checked={false} />
                  <Body>
                    <Text>Spara kort</Text>
                  </Body>
                </ListItem>
              </Form>
            </CardItem>
            <CardItem>
              <Grid>
                <Col style={StyleSheet.flatten(styles.secondaryButtonSpacing)}>
                  <Button block light>
                    <Text>Avbryt</Text>
                  </Button>
                </Col>
                <Col>
                  <Button block primary>
                    <Text>Betala</Text>
                  </Button>
                </Col>
              </Grid>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
