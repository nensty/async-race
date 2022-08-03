import { createElementWithClassname } from 'src/utils';
import { renderTitle } from 'src/views/common/components/title';
import { renderCurrentPageNumber } from 'src/views/common/components/page-number';
import { renderCarCard } from 'src/views/garage/components';

export const renderGarageView = () => {
  const allCars = [
    {
      'name': 'Tesla',
      'color': '#e6e6fa',
      'id': 1,
    }, {
      'name': 'Tesla 2',
      'color': '#e6e6fa',
      'id': 2,
    },
  ];
  const wrapper = createElementWithClassname('div', 'view garage-view');
  const carCardsWrapper = createElementWithClassname('div', 'car-cards__wrapper');
  const title = renderTitle('Garage', allCars.length);
  const page = renderCurrentPageNumber();

  wrapper.appendChild(title);
  wrapper.appendChild(page);
  wrapper.appendChild(carCardsWrapper);

  for (const car of allCars) {
    carCardsWrapper.appendChild(renderCarCard(car));
  }

  return wrapper;
};