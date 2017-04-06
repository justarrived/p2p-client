const initialState = {
  data: [
    {
      title: 'Snöskottning',
      description: 'Få hjälp i vinterkylan!',
      icon: { uri: 'https://facebook.github.io/react/img/logo_og.png' },
      image: { uri: 'https://facebook.github.io/react/img/logo_og.png' },
    },
    {
      title: 'Lövkrattning',
      description: 'Få hjälp med lövkrattning!',
      icon: { uri: 'https://facebook.github.io/react/img/logo_og.png' },
      image: { uri: 'https://facebook.github.io/react/img/logo_og.png' },
    },
  ],
};

export default function (state = initialState, action) {
  return state;
}
