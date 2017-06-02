import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Tab, Tabs } from 'native-base';
import WorkerInfoScreen from '../worker-info-screen';
import ReferenceScreen from '../reference-screen';
import I18n from '../../../i18n';
import JAButton from '../../common/ja-button';
import { JA_BUTTON } from '../../../resources/constants';
import WorkerProfileStyle from './workerProfileStyle';
import { navigate } from '../../../actions/navigation';

const NAME = 'John Doe';

class WorkerProfileScreen extends Component {

  static navigationOptions = {
    title: I18n.t('screen_titles.worker_profile'),
  };

  // TODO Replace placeholder data in ReferenceScreen
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={I18n.t('account.profile_tab')} >
            <WorkerInfoScreen />
          </Tab>
          <Tab heading={I18n.t('account.references')}>
            <ReferenceScreen />
          </Tab>
        </Tabs>
        <View style={StyleSheet.flatten(WorkerProfileStyle.buttonContainer)}>
          <JAButton
            style={StyleSheet.flatten(WorkerProfileStyle.buttonStyle)}
            content={I18n.t('button_actions.select', { name: NAME })}
            actionOnClick={() => this.props.navigate('PaymentInfoScreen')}
            typeOfButton={JA_BUTTON.PRIMARY}
          />
        </View>
      </Container>
    );
  }
}
function bindAction(dispatch) {
  return {
    navigate: (routeName, params) => dispatch(navigate(routeName, params)),
  };
}

const mapStateToProps = state => ({ navigation: state.navigation });
export default connect(mapStateToProps, bindAction)(WorkerProfileScreen);
