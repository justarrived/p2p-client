import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text } from 'native-base';

import ModalCard from '../common/modalCard';
import CardItemButton from '../common/cardItemButton';

// Example screen containing a common ModalCard
export default class ModalCardScreen extends Component {

  // Navigation information
  static navigationOptions = {
    title: 'Card Modal',
  };

  // Constructor setting intitial state
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  // Display or hide the modal
  setModalVisible(visible) {
    this.setState({
      modalVisible: visible,
    });
  }

  // Render the component
  render() {
    return (
      <Container>
        <Content>
          <ModalCard
            visible={this.state.modalVisible}
            onRequestClose={() => this.setModalVisible(false)}
          >
            <CardItem>
              <Text >this is a custom component modal!</Text>
            </CardItem>
            <CardItem>
              <Text >More styling and options can be added to make it fit different use cases</Text>
            </CardItem>
            <CardItemButton
              onPress={() => this.setModalVisible(false)}
              text="Close the modal"
            />
          </ModalCard>
          <Card>
            <CardItem bordered>
              <Text >Content b4 modal option</Text>
            </CardItem>
            <CardItem bordered onPress={() => this.setModalVisible(true)}>
              <Text >Press here to open modal!</Text>
            </CardItem>
            <CardItem bordered>
              <Text >Content after modal</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
