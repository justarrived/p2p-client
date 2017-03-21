import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    greeting: 'Hello, this is a sample screen using i18n',
    dev: 'Developer',
    screenTitle: 'I18n Sample',
  },
  fr: {
    greeting: 'Bonjour!',
    dev: 'Développeur',
  },
  sv: {
    greeting: 'Hej! Detta är en exempelskärm som använder I18n!',
    dev: 'Utvecklare',
    screenTitle: 'I18n Exempel',
  },
};

export default I18n;
