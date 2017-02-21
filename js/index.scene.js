import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default class IndexScene extends Component {
  static get defaultProps() {
    return {
      content: 'This is quality content'
    };
  }

  render() {
    return (
      <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Just Header</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <Text>App goes here!</Text>
                    <Text>{this.props.content}</Text>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Just Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
    )
  }
}