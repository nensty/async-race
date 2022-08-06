import { createElementWithClassname } from 'src/utils';
import { Car } from 'src/types';
import { startEngine } from 'src/views/garage/utils/start-engine';

export const renderStartRace = (allCars: Car[]) => {
  const startRaceButton = createElementWithClassname('button', 'race secondary-button');

  startRaceButton.innerText = 'race'.toUpperCase();

  startRaceButton.addEventListener('click', async () => {
    await Promise.any(allCars.map((car) => startEngine(car)
      .then((currentCar) => currentCar)))
      .then(car => car);
  });

  return startRaceButton;
};