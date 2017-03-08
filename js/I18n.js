import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    greeting: 'Hi!',
    dev: 'Developer',
  },
  fr: {
    greeting: 'Bonjour!',
    dev: 'Développeur',
  },
};

export default I18n;
