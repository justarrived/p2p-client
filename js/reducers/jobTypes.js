import I18n from '../i18n';

const initialState = {
  data: [
    {
      title: I18n.t('categories.shoveling.title'),
      description: I18n.t('categories.shoveling.description'),
      icon: { uri: 'https://facebook.github.io/react/img/logo_og.png' },
      image: { uri: 'https://facebook.github.io/react/img/logo_og.png' },
    },
    {
      title: I18n.t('categories.raking.title'),
      description: I18n.t('categories.raking.description'),
      icon: { uri: 'https://facebook.github.io/react/img/logo_og.png' },
      image: { uri: 'https://facebook.github.io/react/img/logo_og.png' },
    },
    {
      title: I18n.t('categories.cleaning.title'),
      description: I18n.t('categories.cleaning.description'),
      icon: { uri: 'https://facebook.github.io/react/img/logo_og.png' },
      image: { uri: 'https://facebook.github.io/react/img/logo_og.png' },
    },
    {
      title: I18n.t('categories.weeding.title'),
      description: I18n.t('categories.weeding.description'),
      icon: { uri: 'https://facebook.github.io/react/img/logo_og.png' },
      image: { uri: 'https://facebook.github.io/react/img/logo_og.png' },
    },
  ],
};

export default function (state = initialState, action) {
  return state;
}
