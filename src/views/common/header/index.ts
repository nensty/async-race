import { createButtonWithLabel, createElementWithClassname } from 'src/utils';
import {
  showGarageViewOnClick,
  showWinnersViewOnClick,
} from 'src/views/common/header/utils';

export const renderHeader = () => {
  const header = createElementWithClassname('header', 'header');
  const switchWrapper = createElementWithClassname('div', 'wrapper switch-wrapper');
  const garageViewButton = createButtonWithLabel('To Garage');
  const winnersViewButton = createButtonWithLabel('To Winners');

  header.appendChild(switchWrapper);
  switchWrapper.appendChild(garageViewButton);
  switchWrapper.appendChild(winnersViewButton);

  showGarageViewOnClick(garageViewButton);
  showWinnersViewOnClick(winnersViewButton);

  return header;
};