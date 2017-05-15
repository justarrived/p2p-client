import I18n from '../../i18n';

const lawnMowingImage = require('../../../assets/images/task-images/lawn.jpg');
const cleaningImage = require('../../../assets/images/task-images/cleaning.jpg');
const gardeningImage = require('../../../assets/images/task-images/gardening.jpg');
const defaultImage = require('../../../assets/images/task-images/calm.jpg');

const lawnMowingIcon = require('../../../assets/images/task-icons/icon-grass.png');
const cleaningIcon = require('../../../assets/images/task-icons/icon-cleaning.png');
const gardeningIcon = require('../../../assets/images/task-icons/icon-shears.png');
const defaultIcon = require('../../../assets/images/task-icons/icon-briefcase.png');

const LAWN_MOWING = I18n.t('categories.lawn_mowing.title');
const CLEANING = I18n.t('categories.cleaning.title');
const GARDENING = I18n.t('categories.gardening.title');

/**
  Method used to receive the cover image connected to a task.
  This method is relatively naive, and exists temporarily for demonstrative purposes.

  TODO Receive images from API when functionality exists.
**/
export function getTaskImage(task) {
  switch (task) {
    case LAWN_MOWING:
      return lawnMowingImage;
    case CLEANING:
      return cleaningImage;
    case GARDENING:
      return gardeningImage;
    default:
      return defaultImage;
  }
}

/**
  Method used to receive the icon connected to a task.
  This method is relatively naive, and exists temporarily for demonstrative purposes.

  TODO Receive icons from API when functionality exists.
**/
export function getTaskIcon(task) {
  switch (task) {
    case LAWN_MOWING:
      return lawnMowingIcon;
    case CLEANING:
      return cleaningIcon;
    case GARDENING:
      return gardeningIcon;
    default:
      return defaultIcon;
  }
}
