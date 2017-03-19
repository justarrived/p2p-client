import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { CardItem, List, Item, Input } from 'native-base';

import languageSelectionStyles from './languageSelectionStyles';

export default class SearchList extends Component {
  static propTypes = {
    dataArrayFilter: React.PropTypes.func.isRequired,
    renderRow: React.PropTypes.func.isRequired,
    dataArray: React.PropTypes.arrayOf(React.PropTypes.shape).isRequired,
  }

  // Constructor setting intitial state
  constructor(props) {
    super(props);
    this.state = {
      preQueryLenght: 0,
      dataDisplayed: props.dataArray,
    };
  }

  // Search for a specific language
  search(query) {
    if (this.state.dataDisplayed.length > 0
      || query.length < this.state.preQueryLenght) {
      if (query.length === 0) {
        // Display all languages
        this.setState({
          preQueryLenght: 0,
          dataDisplayed: this.props.dataArray,
        });
      } else if (query.length > this.state.preQueryLenght) {
        this.setState({
          // Filter the currently displayed languages
          preQueryLenght: query.length,
          dataDisplayed: this.props.dataArrayFilter(this.state.dataDisplayed, query),
        });
      } else {
        // Filter all languages
        this.setState({
          preQueryLenght: query.length,
          dataDisplayed: this.props.dataArrayFilter(this.props.dataArray, query),
        });
      }
    }
  }

  // Render the component
  render() {
    return (
      <View
        style={languageSelectionStyles.languageSelectionView}
      >
        <CardItem>
          <Item rounded>
            <Input
              placeholder=" Search..."
              onChangeText={query => this.search(query)}
            />
          </Item>
        </CardItem>
        <CardItem style={StyleSheet.flatten(languageSelectionStyles.languageSelectionList)}>
          <List
            dataArray={this.state.dataDisplayed}
            renderRow={rowData => this.props.renderRow(rowData)}
          />
        </CardItem>
      </View>
    );
  }
}
