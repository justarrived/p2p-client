import React, { Component } from 'react';
import { Content, Text, List } from 'native-base';

export default class KnownLanguages extends Component {
  static propTypes = {
    languages: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  }

  // Render the component
  render() {
    if (this.props.languages.length === 0) {
      return (
        <Text >Select languages you know!</Text>
      );
    }
    if (this.props.languages.length > 0) {
      return (
        <Content >
          <Text >Languages you know:</Text>
          <List
            dataArray={this.props.languages} renderRow={rowData =>
              <Text >{rowData}</Text>
              }
          />
        </Content >
      );
    }
    return (
      <Text >This is literally impossible!</Text>
    );
  }
}
