import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Grid, Col } from 'native-base';
import styles from './style';


export default class PersonalInfoButtons extends Component {
  static propTypes = {
    disabled: React.PropTypes.bool.isRequired,
    onPress: React.PropTypes.func.isRequired,
  }

  render() {
    if (this.props.disabled === true) {
      return (
        <Button
          full onPress={() => this.props.onPress()}
          style={StyleSheet.flatten(styles.buttonFlex)}
        >
          <Text style={StyleSheet.flatten(styles.regButtonText)}>
            ÄNDRA
          </Text>
        </Button>
      );
    }

    return (
      <Grid>
        <Col>
          <Button
            full onPress={() => this.props.onPress()}
            style={StyleSheet.flatten(styles.secondaryButtonGroup)}
          >
            <Text style={StyleSheet.flatten(styles.regButtonText)}>
              AVBRYT
            </Text>
          </Button>
        </Col>
        <Col>
          <Button full onPress={() => this.props.onPress()}>
            <Text style={StyleSheet.flatten(styles.regButtonText)}>
            SPARA
          </Text>
          </Button>
        </Col>
      </Grid>
    );
  }
}
