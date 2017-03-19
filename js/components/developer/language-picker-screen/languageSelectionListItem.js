import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Text, Right, Radio } from 'native-base';

import { addLanguage, removeLanguage } from '../../../actions/languages';

class LanguageSelectionListItem extends Component {

  static propTypes = {
    addLanguage: React.PropTypes.func.isRequired,
    removeLanguage: React.PropTypes.func.isRequired,
    myLanguages: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    language: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
    }).isRequired,
  }

  // Add or remove language as a known language
  languageSelection(remove) {
    if (remove) {
      this.props.removeLanguage(this.props.language.id);
    } else {
      this.props.addLanguage(this.props.language.id);
    }
  }

  // Render the component
  render() {
    const selected = this.props.myLanguages.includes(this.props.language.id);
    return (
      <Card bordered="false">
        <CardItem onPress={() => this.languageSelection(selected)}>
          <Text>{this.props.language.name}</Text>
          <Right>
            <Radio
              selected={selected}
              onPress={() => this.languageSelection(selected)}
            />
          </Right>
        </CardItem>
      </Card>
    );
  }
}

function bindAction(dispatch) {
  return {
    addLanguage: name => dispatch(addLanguage(name)),
    removeLanguage: name => dispatch(removeLanguage(name)),
  };
}

const mapStateToProps = state => ({ myLanguages: state.languages.lang });

export default connect(mapStateToProps, bindAction)(LanguageSelectionListItem);
