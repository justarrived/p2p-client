import I18n from '../i18n';
import { getTaskImage, getTaskIcon } from '../util/task-graphics-getter';

const LAWN_MOWING = I18n.t('categories.lawn_mowing.title');
const CLEANING = I18n.t('categories.cleaning.title');
const GARDENING = I18n.t('categories.gardening.title');

const initialState = {
  data: [
    {
      title: LAWN_MOWING,
      description: I18n.t('categories.lawn_mowing.description'),
      icon: getTaskIcon(LAWN_MOWING),
      image: getTaskImage(LAWN_MOWING),
    },
    {
      title: CLEANING,
      description: I18n.t('categories.cleaning.description'),
      icon: getTaskIcon(CLEANING),
      image: getTaskImage(CLEANING),
    },
    {
      title: GARDENING,
      description: I18n.t('categories.gardening.description'),
      icon: getTaskIcon(GARDENING),
      image: getTaskImage(GARDENING),
    },
  ],
};

export default function (state = initialState, action) {
  return state;
}
