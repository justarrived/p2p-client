import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Grid, Col } from 'native-base';
import style from './editButtonsStyle';
import I18n from '../../../i18n';

// Edit or cancel/save buttons
const EditButtons = ({ disabled, onEdit, onCancel, onSave }) => {
  if (disabled) {
    // If disabled return the edit button
    return (
      <Button
        full
        onPress={() => onEdit()}
        style={StyleSheet.flatten(style.buttonFlex)}
      >
        <Text
          style={StyleSheet.flatten(style.regButtonText)}
        >{I18n.t('button_actions.edit')}</Text>
      </Button>
    );
  }
  // If not disabled return the cancel or save
  return (
    <Grid>
      <Col>
        <Button
          full
          onPress={() => onCancel()}
          style={StyleSheet.flatten(style.secondaryButtonGroup)}
        >
          <Text
            style={StyleSheet.flatten(style.regButtonText)}
          >{I18n.t('button_actions.cancel')}</Text>
        </Button>
      </Col>
      <Col>
        <Button
          full
          onPress={() => onSave()}
        >
          <Text
            style={StyleSheet.flatten(style.regButtonText)}
          >{I18n.t('button_actions.save')}</Text>
        </Button>
      </Col>
    </Grid>
  );
};

EditButtons.propTypes = {
  disabled: React.PropTypes.bool.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
};

export default EditButtons;
