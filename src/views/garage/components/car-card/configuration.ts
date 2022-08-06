import { createElementWithClassname } from 'src/utils';
import { createCarSvg } from 'src/views/garage/utils/create-svg';
import { Car, Status } from 'src/types';
import { startEngine } from 'src/api';
import { CAR_WIDTH } from 'src/views/garage/constants';

export const renderCarConfiguration = (car: Car) => {
  const carConfiguration = createElementWithClassname('div', 'car-card__configuration');
  const startButton = createElementWithClassname('button', 'start car-card__configuration__start-button');
  const stopButton = createElementWithClassname('button', 'stop car-card__configuration__stop-button');
  const carImage = createCarSvg(car.color);

  carConfiguration.appendChild(startButton);
  carConfiguration.appendChild(stopButton);
  carConfiguration.appendChild(carImage);

  carImage.id = `${car.id}`;

  startButton.addEventListener('click', async () => {
    const carDrivingSettings = await startEngine({ id: car.id!, status: Status.STARTED });

    carImage.style.transform = `translateX(${document.body.offsetWidth - CAR_WIDTH}px)`;
    carImage.style.transition = `ease ${carDrivingSettings.distance / carDrivingSettings.velocity}ms`;
  });

  return carConfiguration;
};