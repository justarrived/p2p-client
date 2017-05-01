import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { Picker, Item, Text, View } from 'native-base';
import { connect } from 'react-redux';
import styles from './languageDropdownStyle';
import I18n from '../../../i18n';
import JAIcon from '../ja-input-icon';

class LanguageDropdown extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  onValueChange(value: string) {
    this.setNewLanguage(value);
    this.props.onChange(value);
  }

  setNewLanguage(value: string) {
    this.setState({
      selected: value,
    });
  }
// TODO prop validation
  render() {
    const languagesList = [];
    this.props.languages.languages.data.forEach((language) => {
      languagesList.push(language.attributes.local_name);
    });

    const languageItems = languagesList.map(s => <Picker.Item key={s}value={s} label={s} />);

    return (
      <View style={StyleSheet.flatten(styles.viewWrapper)}>
        <Text style={StyleSheet.flatten(styles.languageLabel)}>
          {I18n.t('language.select_display_language')}
        </Text>
        <Item style={StyleSheet.flatten(styles.pickerwrapper)}>
          <JAIcon name="flag" />
          <Picker
            mode="dropdown"
            iosHeader={I18n.t('language.select_display_language')}
            selectedValue={this.state.selected}
            onValueChange={value => this.onValueChange(value)}
            style={StyleSheet.flatten(styles.picker)}
          >
            {languageItems}
          </Picker>
        </Item>
      </View>
    );
  }
}

const mapStateToProps = state => ({ languages: state.languages });

export default connect(mapStateToProps)(LanguageDropdown);
