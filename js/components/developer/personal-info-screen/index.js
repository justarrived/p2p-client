import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Col,
  Row,
  Grid,
  Button,
  Picker,
  Thumbnail,
} from 'native-base';
import styles from './style';
const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';

export default class PersonalInfoScreen extends React.Component {

  render() {
    return (
      <Container>
        <Content>
          <View style={StyleSheet.flatten(styles.topContainer)}>
            <View style={styles.logoContainer}>
              <Thumbnail
                style={StyleSheet.flatten(styles.logo)} source={{
                  uri: LOGO_URL,
                }}
              />
            </View>
            <Text style={StyleSheet.flatten(styles.nameText)}>
              John Doe
            </Text>
          </View>
          <Form style={StyleSheet.flatten(styles.container)}>
            <Grid>

              <Item stackedLabel style={StyleSheet.flatten(styles.input)}>
                <Label>Adress</Label>
                <Input returnKeyType={'next'} placeholder="Ringvägen 49" />
              </Item>

              <Row>
                <Col>
                  <Item stackedLabel style={StyleSheet.flatten(styles.input)}>
                    <Label>Postkod</Label>
                    <Input keyboardType="numeric" maxLength={5} returnKeyType={'next'} placeholder="12345" />
                  </Item>
                </Col>
                <Col>
                  <Item stackedLabel last style={StyleSheet.flatten(styles.input)}>
                    <Label>Ort</Label>
                    <Input returnKeyType={'next'} placeholder="Göteborg" />
                  </Item>
                </Col>
              </Row>

            </Grid>
            <Item stackedLabel style={StyleSheet.flatten(styles.input)}>
              <Label>Telefon</Label>
              <Input keyboardType="numeric" returnKeyType={'next'} placeholder="647445114" />
            </Item>
            <Item stackedLabel style={StyleSheet.flatten(styles.input)}>
              <Label>E-Post</Label>
              <Input keyboardType="email-address" />
            </Item>
            <Item stackedLabel style={StyleSheet.flatten(styles.input)}>
              <Label>Lösenord</Label>
              <Input placeholder="asdasdasd" secureTextEntry />
            </Item>

          </Form>
          <View style={StyleSheet.flatten(styles.bottomContainer)}>
            <Button full info rounded>
              <Text style={StyleSheet.flatten(styles.regButtonText)}>
                ÄNDRA
              </Text>
            </Button>

          </View>
        </Content>
      </Container>
    );
  }
}

/*

*/
