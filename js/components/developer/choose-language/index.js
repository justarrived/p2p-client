import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import {CardItem, Card, Thumbnail, Container, ListItem, Content, Button, Left, Right, Icon} from 'native-base';

const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';

export default class ChooseLanguage extends Component {
render() {
  return (

<Container>
  <Content>
  <Text style={{fontSize: 15, fontStyle: 'italic', marginLeft: 15}}>Language Selection</Text>
  <Card style={{margin: 5}}>

         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Thumbnail style={{width: 140, height: 140, borderRadius: 70, alignItems: 'center', margin: 20}}
                    source={{ uri: LOGO_URL }}
              />
         </View>

         <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 25}}>Välj språk</Text>

         <Card style={{flex: 0, margin: 10}}>

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
       </Card>
   </Content>
</Container>


    );
  }
}
