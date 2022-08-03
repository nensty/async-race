import { createElementWithClassname } from 'src/utils';
import { renderFlag } from 'src/views/garage/components/car-card/render-flag';
import { renderCarConfiguration } from 'src/views/garage/components/car-card/configuration';
import { Car } from 'src/types';

export const renderCarMain = (car: Car) => {
  const carMainLine = createElementWithClassname('div', 'car-card__main');

  carMainLine.appendChild(renderCarConfiguration(car));
  carMainLine.appendChild(renderFlag());

  return carMainLine;
};