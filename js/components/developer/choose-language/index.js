import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CardItem, Card, Thumbnail, Container, Content, Left, Right, Icon } from 'native-base';
import chooseLanguageStyles from './chooseLanguageStyles';

const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';

export default class ChooseLanguage extends Component {

  static navigationOptions = {
    title: 'Language Selection',
  };

  render() {
    return (

      <Container>
        <Content>

          <View style={StyleSheet.flatten(chooseLanguageStyles.logoContainer)}>
            <Thumbnail
              style={StyleSheet.flatten(chooseLanguageStyles.logo)}
              source={{ uri: LOGO_URL }}
            />
          </View>

          <Text style={StyleSheet.flatten(chooseLanguageStyles.textStyleUnder)}>Välj språk
            </Text>

          <Card style={StyleSheet.flatten(chooseLanguageStyles.cardInner)}>
            <CardItem bordered button>
              <Left>
                <Text>Svenska</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem bordered button>
              <Left>
                <Text>English</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem bordered button>
              <Left>
                <Text>Español</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem bordered button>
              <Left>
                <Text>Dansk</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem bordered button>
              <Left>
                <Text>Norsk</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem bordered button>
              <Left>
                <Text>Etc</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem bordered button>
              <Left>
                <Text>Etc</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>

        </Content>
      </Container>

    );
  }
}
