import { createElementWithClassname } from 'src/utils';
import { renderSelectButton } from 'src/views/garage/components/car-card/select-car';
import { renderRemoveCarButton } from 'src/views/garage/components/car-card/remove-car';
import { Car } from 'src/types';

export const renderCarHeader = (car: Car) => {
  const carHeader = createElementWithClassname('div', 'car-card__header');
  const carTitle = createElementWithClassname('h3', 'car-title');

  carTitle.innerText = car.name;

  carHeader.appendChild(renderSelectButton(car.id || 0));
  carHeader.appendChild(renderRemoveCarButton(car.id || 0));
  carHeader.appendChild(carTitle);

  return carHeader;
};