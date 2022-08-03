import { createElementWithClassname } from 'src/utils';
import { createCarSvg } from 'src/views/garage/utils/create-svg';
import { Car } from 'src/types';

export const renderCarConfiguration = (car: Car) => {
  const carConfiguration = createElementWithClassname('div', 'car-card__configuration');
  const startButton = createElementWithClassname('button', 'start car-card__configuration__start-button');
  const stopButton = createElementWithClassname('button', 'stop car-card__configuration__stop-button');
  const carImage = createCarSvg(car.color);

  carConfiguration.appendChild(startButton);
  carConfiguration.appendChild(stopButton);
  carConfiguration.appendChild(carImage);

  return carConfiguration;
};