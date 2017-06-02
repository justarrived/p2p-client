import React, { Component, PropTypes } from 'react';
import DatePicker from 'react-native-datepicker';
import { JA_DATEPICKER_TYPE } from '../../../resources/constants';

import styles from './style';
import I18n from '../../../i18n';

export default class JADatePicker extends Component {
  static propTypes = {
    typeOfInput: PropTypes.oneOf(Object.values(JA_DATEPICKER_TYPE)).isRequired,
    onChange: PropTypes.func.isRequired,
    currentPickerValue: PropTypes.string,
  }

  static defaultProps = {
    currentPickerValue: '',
  }

  onSelection = (pickerSelection) => {
    this.props.onChange(pickerSelection);
  }

  render() {
    let pickerMode;
    let placeholder;
    let pickerFormat;
    switch (this.props.typeOfInput) {
      case JA_DATEPICKER_TYPE.DATE:
        pickerMode = 'date';
        placeholder = I18n.t('date_and_time.select_date');
        pickerFormat = 'YYYY-MM-DD';
        break;
      case JA_DATEPICKER_TYPE.TIME:
        pickerMode = 'time';
        placeholder = I18n.t('date_and_time.select_time');
        pickerFormat = 'HH:mm';
        break;
      default:
        break;
    }
    return (
      <DatePicker
        style={styles.picker}
        customStyles={{ dateInput: { borderWidth: 0, borderBottomWidth: 1 } }}
        date={this.props.currentPickerValue}
        mode={pickerMode}
        placeholder={placeholder}
        format={pickerFormat}
        confirmBtnText={I18n.t('button_actions.confirm')}
        cancelBtnText={I18n.t('button_actions.cancel')}
        showIcon={false}
        onDateChange={selection => this.onSelection(selection)}
      />
    );
  }
}
