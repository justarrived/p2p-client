// TODO Replace placeholder icons with credit card icons.
const VISA = require('../../assets/images/credit-cards/visa.png');
const MASTERCARD = require('../../assets/images/credit-cards/mastercard.png');

const initialState = {
  data: [
    {
      cardNumber: '.... .... .... 4499',
      brand: 'MasterCard',
      icon: MASTERCARD,
    },
    {
      cardNumber: '.... .... .... 3232',
      brand: 'Visa',
      icon: VISA,
    },
  ],
};

export default function (state = initialState, action) {
  return state;
}
