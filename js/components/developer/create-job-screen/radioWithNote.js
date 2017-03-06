import React, { Component } from 'react';
import { ListItem, Radio, Left, Right, Text } from 'native-base';

// Radio button list item with title and note.
export default class RadioWithNote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSelected: this.props.selected,
    };
  }

  toggleRadio = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  }

  render() {
    return (
      <ListItem selected={this.state.isSelected} onPress={this.toggleRadio}>
        <Left>
          <Radio selected={this.state.isSelected} onPress={this.toggleRadio} />
          <Text>{this.props.title}</Text>
          <Right>
            <Text note>{this.props.note}</Text>
          </Right>
        </Left>
      </ListItem>
    );
  }
}

RadioWithNote.propTypes = {
  title: React.PropTypes.string.isRequired,
  note: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool,
};

RadioWithNote.defaultProps = {
  selected: true,
};
