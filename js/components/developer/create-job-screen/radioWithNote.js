import React, { Component } from 'react';
import { ListItem, Radio, Left, Right, Text } from 'native-base';

// Radio button list item with title and note.
export default class RadioWithNote extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    note: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool.isRequired,
    onPress: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <ListItem selected={this.props.selected} onPress={this.props.onPress} >
        <Left>
          <Radio selected={this.props.selected} onPress={this.props.onPress} />
          <Text>{this.props.title}</Text>
          <Right>
            <Text note>{this.props.note}</Text>
          </Right>
        </Left>
      </ListItem>
    );
  }
}
