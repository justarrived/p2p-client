import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Content, Text, Col, Grid, ListItem, Form, Input,
  Item, CheckBox, Button, Body, Label, Card, CardItem,
} from 'native-base';
import styles from './style';
import GlobalStyle from '../../common/globalStyle';
import I18n from '../../../i18n';

export default class MakePaymentScreen extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <Card>
            <CardItem bordered style={StyleSheet.flatten(styles.formContainer)}>
              <Form style={StyleSheet.flatten(styles.form)}>
                <Item floatingLabel>
                  <Label>{I18n.t('card.card_holder')}</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>{I18n.t('card.card_number')}</Label>
                  <Input keyboardType="numeric" />
                </Item>
                <Grid>
                  <Col>
                    <Item floatingLabel>
                      <Label>{I18n.t('card.expiration_date_placeholder')}</Label>
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
                    <Text>{I18n.t('card.save_card')}</Text>
                  </Body>
                </ListItem>
              </Form>
            </CardItem>
            <CardItem>
              <Grid>
                <Col style={StyleSheet.flatten(styles.secondaryButtonSpacing)}>
                  <Button block light>
                    <Text>{I18n.t('button_actions.cancel')}</Text>
                  </Button>
                </Col>
                <Col>
                  <Button block primary>
                    <Text>{I18n.t('card.pay')}</Text>
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
