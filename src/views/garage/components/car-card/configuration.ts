import { createElementWithClassname } from 'src/utils';
import { createCarSvg } from 'src/views/garage/utils/create-svg';
import { Car, Status } from 'src/types';
import { startStopEngine } from 'src/api';
import { startEngine } from 'src/views/garage/utils/start-engine';

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
    await startEngine(car);
  });

  stopButton.addEventListener('click', async () => {
    await startStopEngine({ id: car.id!, status: Status.STOPPED });

    carImage.style.transform = 'none';
    carImage.style.transition = 'none';
  });

  return carConfiguration;
};