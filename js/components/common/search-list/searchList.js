import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { CardItem, List, Item, Input } from 'native-base';

import searchListStyles from './searchListStyles';

export default class SearchList extends Component {
  static propTypes = {
    dataArrayFilter: React.PropTypes.func.isRequired,
    renderRow: React.PropTypes.func.isRequired,
    dataArray: React.PropTypes.arrayOf(React.PropTypes.shape).isRequired,
    styleView: View.propTypes.style,
    styleList: View.propTypes.style,
    placeholder: React.PropTypes.string,
  }
  static defaultProps = {
    placeholder: ' Search...',
    styleView: {},
    styleList: {},
  }

  // Constructor setting intitial state
  constructor(props) {
    super(props);
    this.state = {
      preQueryLenght: 0,
      dataDisplayed: props.dataArray,
    };
  }

  // Search for specific data using the dataArrayFilter in the props
  search(query) {
    if (this.state.dataDisplayed.length > 0
      || query.length < this.state.preQueryLenght) {
      if (query.length === 0) {
        // Display all data
        this.setState({
          preQueryLenght: 0,
          dataDisplayed: this.props.dataArray,
        });
      } else if (query.length > this.state.preQueryLenght) {
        this.setState({
          // Filter the currently displayed data
          preQueryLenght: query.length,
          dataDisplayed: this.props.dataArrayFilter(this.state.dataDisplayed, query),
        });
      } else {
        // Filter all data
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
        style={[searchListStyles.searchListView, this.props.styleView]}
      >
        <CardItem>
          <Item rounded>
            <Input
              placeholder={this.props.placeholder}
              onChangeText={query => this.search(query)}
            />
          </Item>
        </CardItem>
        <CardItem
          style={StyleSheet.flatten(
            [searchListStyles.searchListCardItem, this.props.styleList])}
        >
          <List
            dataArray={this.state.dataDisplayed}
            renderRow={rowData => this.props.renderRow(rowData)}
          />
        </CardItem>
      </View>
    );
  }
}
