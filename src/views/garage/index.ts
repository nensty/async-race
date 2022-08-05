import { createElementWithClassname } from 'src/utils';
import { renderTitle } from 'src/views/common/components/title';
import { renderCurrentPageNumber } from 'src/views/common/components/page-number';
import { renderCarCard } from 'src/views/garage/components';
import { getAllCars } from 'src/api';
import { renderCarManagement } from 'src/views/garage/components/car-management';

export const renderGarageView = async () => {
  const allCars = await getAllCars();
  const wrapper = createElementWithClassname('div', 'view garage-view');
  const carCardsWrapper = createElementWithClassname('div', 'car-cards__wrapper');
  const carConfiguration = renderCarManagement(carCardsWrapper);
  const title = await renderTitle('Garage', getAllCars);
  const page = renderCurrentPageNumber();

  wrapper.appendChild(carConfiguration);
  wrapper.appendChild(title);
  wrapper.appendChild(page);
  wrapper.appendChild(carCardsWrapper);

  for (const car of allCars) {
    carCardsWrapper.appendChild(renderCarCard(car));
  }

  return wrapper;
};