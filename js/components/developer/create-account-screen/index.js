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
} from 'native-base';
import styles from './style';

export default class DeveloperScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Developer',
    },
    title: 'Skapa Konto',
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: 'key1',
      results: {
        items: [],
      },
    };
  }
  onValueChange(value : string) {
    this.setState({ selected1: value });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <Form style={StyleSheet.flatten(styles.container)}>
            <Grid>
              <Row>
                <Col>
                  <Item floatingLabel style={StyleSheet.flatten(styles.input)}>
                    <Label>Förnamn</Label>
                    <Input returnKeyType={'next'} />
                  </Item>
                </Col>
                <Col>
                  <Item floatingLabel style={StyleSheet.flatten(styles.input)}>
                    <Label>Efternamn</Label>
                    <Input returnKeyType={'next'} />
                  </Item>
                </Col>
              </Row>

              <Item floatingLabel style={StyleSheet.flatten(styles.input)}>
                <Label>Adress</Label>
                <Input returnKeyType={'next'} />
              </Item>

              <Row>
                <Col>
                  <Item floatingLabel style={StyleSheet.flatten(styles.input)}>
                    <Label>Postkod</Label>
                    <Input keyboardType="numeric" maxLength={5} returnKeyType={'next'} />
                  </Item>
                </Col>
                <Col>
                  <Item floatingLabel last style={StyleSheet.flatten(styles.input)}>
                    <Label>Ort</Label>
                    <Input returnKeyType={'next'} />
                  </Item>
                </Col>
              </Row>
            </Grid>
            <Item floatingLabel style={StyleSheet.flatten(styles.input)}>
              <Label>Telefon</Label>
              <Input keyboardType="numeric" returnKeyType={'next'} />
            </Item>
            <Item floatingLabel style={StyleSheet.flatten(styles.input)}>
              <Label>E-Post</Label>
              <Input keyboardType="email-address" />
            </Item>
            <Item floatingLabel style={StyleSheet.flatten(styles.input)}>
              <Label>Lösenord</Label>
              <Input secureTextEntry />
            </Item>
            <Picker iosHeader="Select one" mode="dialog" selectedValue={this.state.selected1} onValueChange={this.onValueChange.bind(this)} style={StyleSheet.flatten(styles.dropdown)}>
              <Item label="Svenska" value="key0" />
              <Item label="Norsk" value="key1" />
              <Item label="English" value="key2" />
              <Item label="Dansk" value="key3" />
              <Item label="العربية" value="key4" />
            </Picker>

          </Form>
          <View style={StyleSheet.flatten(styles.bottomContainer)}>
            <Button full info rounded>
              <Text style={StyleSheet.flatten(styles.regButtonText)}>
                REGISTRERA
              </Text>
            </Button>
            <Button full transparent>
              <Text style={StyleSheet.flatten(styles.tranparentButtonText)}>
                Jag har redan ett konto - Logga in
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
