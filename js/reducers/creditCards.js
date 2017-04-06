// TODO Replace placeholder icons with credit card icons.
const initialState = {
  data: [
    {
      cardNumber: '.... .... .... 4499',
      brand: 'MasterCard',
      icon: { uri: 'https://facebook.github.io/react/img/logo_og.png' },
    },
    {
      cardNumber: '.... .... .... 3232',
      brand: 'Visa',
      icon: { uri: 'https://facebook.github.io/react/img/logo_og.png' },
    },
  ],
};

export default function (state = initialState, action) {
  return state;
}
