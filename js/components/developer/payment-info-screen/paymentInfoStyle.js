import { StyleSheet } from 'react-native';
import { PAYMENT_MODAL_BACKGROUND_OVERLAY } from '../../../resources/colors';

const style = StyleSheet.create({
  addCardButton: {
    padding: 10,
  },
  cancelPaymentButton: {
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PAYMENT_MODAL_BACKGROUND_OVERLAY,
  },
  noFlex: {
    flex: 0,
  },
  modalTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  modalRowContainer: {
    paddingTop: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

module.exports = style;
