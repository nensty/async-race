import { Car } from 'src/types';
import { createElementWithClassname } from 'src/utils';
import { renderCarHeader } from 'src/views/garage/components/car-card/header';
import { renderCarMain } from 'src/views/garage/components/car-card/main';

export const renderCarCard = (car: Car) => {
  const carWrapper = createElementWithClassname('div', 'car-card');
  const carHeader = renderCarHeader(car);
  const carMainLine = renderCarMain(car);

  carWrapper.appendChild(carHeader);
  carWrapper.appendChild(carMainLine);

  return carWrapper;
};