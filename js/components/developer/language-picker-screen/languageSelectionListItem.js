import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectionListItem from '../common/selectionListItem';
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

  // Add or remove language. State updated through Redux
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
      <SelectionListItem
        selected={selected}
        text={this.props.language.name}
        onPress={() => this.languageSelection(selected)}
      />
    );
  }
}

// props tied together with Redux methods
function bindAction(dispatch) {
  return {
    addLanguage: name => dispatch(addLanguage(name)),
    removeLanguage: name => dispatch(removeLanguage(name)),
  };
}

//  props tied together with Redux state
const mapStateToProps = state => ({ myLanguages: state.languages.lang });

// Connect class with Redux and export
export default connect(mapStateToProps, bindAction)(LanguageSelectionListItem);
