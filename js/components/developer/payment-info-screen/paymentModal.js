import React, { Component, PropTypes } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { Text, Button, Card, CardItem } from 'native-base';
import style from './paymentInfoStyle';
import I18n from '../../../i18n';
import JAInput from '../../common/ja-input';
import { JA_INPUT } from '../../../resources/constants';

// TODO Implement payment functionality
export default class PaymentModal extends Component {

  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    setModalVisible: PropTypes.func.isRequired,
    data: PropTypes.shape({
      creditCard: PropTypes.objectOf(PropTypes.any),
      amount: PropTypes.string,
    }).isRequired,
  };

  render() {
    if (!this.props.visible) {
      return null;
    }

    const { visible, onRequestClose, setModalVisible, data } = this.props;

    return (
      <Modal
        animationType={'fade'}
        transparent
        visible={visible}
        onRequestClose={() => onRequestClose()}
      >
        <View style={style.modalContainer}>
          <Card style={StyleSheet.flatten(style.noFlex)}>
            <CardItem bordered style={StyleSheet.flatten(style.modalTextContainer)}>
              <Text>{I18n.t('payment.confirm_payment')}</Text>
              <Text note>
                {I18n.t('payment.credit_card', { card_number: data.creditCard.cardNumber })}
              </Text>
            </CardItem>
            <CardItem style={StyleSheet.flatten(style.modalRowContainer)}>
              <JAInput typeOfInput={JA_INPUT.CVC} />
            </CardItem>
            <CardItem style={StyleSheet.flatten(style.modalRowContainer)}>
              <Button block onPress={() => setModalVisible(false)}>
                <Text>{I18n.t('payment.pay_button', { amount: data.amount })}</Text>
              </Button>
              <Button
                block small light
                style={StyleSheet.flatten(style.cancelPaymentButton)}
                onPress={() => setModalVisible(false)}
              >
                <Text>{I18n.t('button_actions.cancel')}</Text>
              </Button>
            </CardItem>
          </Card>
        </View>
      </Modal>
    );
  }
}
