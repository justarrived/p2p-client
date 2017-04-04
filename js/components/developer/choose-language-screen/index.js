import React, { Component, PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Thumbnail, Container, Content, List } from 'native-base';
import { connect } from 'react-redux';
import chooseLanguageStyles from './chooseLanguageStyles';
import GlobalStyle from '../../common/globalStyle';
import CardHeader from '../../common/card-header/cardHeader';
import SingleRowListItem from '../../common/single-row-list-item/singleRowListItem';

// TODO Replace temporary placeholder image
const LOGO_URL = 'https://facebook.github.io/react/img/logo_og.png';

class ChooseLanguageScreen extends Component {
  static navigationOptions = {
    title: 'Choose Language',
  };

  // TODO Improve typechecking
  static propTypes = {
    languages: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  renderRow = lang => <SingleRowListItem text={lang.attributes.local_name} icon="arrow-forward" />

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
            <List dataArray={this.props.languages.languages.data} renderRow={this.renderRow} />
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ languages: state.languages });

export default connect(mapStateToProps)(ChooseLanguageScreen);
