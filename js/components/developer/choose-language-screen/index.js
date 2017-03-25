import React, { Component } from 'react';
import { StyleSheet, View, ListView } from 'react-native';
import { Card, Thumbnail, Container, Content } from 'native-base';
import chooseLanguageStyles from './chooseLanguageStyles';
import GlobalStyle from '../../common/globalStyle';
import CardHeader from '../../common/card-header/cardHeader';
import SingleRowListItem from '../../common/single-row-list-item/singleRowListItem';

const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';

// Temporary data. Will be handled in another way in the future.
const LANGUAGES = ['Svenska', 'English', 'Español', 'Dansk', 'Norsk'];

export default class ChooseLanguageScreen extends Component {
  static navigationOptions = {
    title: 'Choose Language',
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(LANGUAGES),
    };
  }

  renderRow = language => <SingleRowListItem text={language} icon="arrow-forward" />

  render() {
    return (
      <Container>
        <Content contentContainerStyle={GlobalStyle.padder}>
          <View style={chooseLanguageStyles.logoContainer}>
            <Thumbnail
              style={StyleSheet.flatten(chooseLanguageStyles.logo)}
              source={{ uri: LOGO_URL }}
            />
          </View>
          <Card>
            <CardHeader title="Välj språk" subtitle="Språket som ska visas i appen" icon="globe" />
            <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
          </Card>
        </Content>
      </Container>
    );
  }
}
