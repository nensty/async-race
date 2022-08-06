import { createElementWithClassname } from 'src/utils';
import { Car } from 'src/types';
import { startEngine } from 'src/views/garage/utils/start-engine';

export const renderStartRace = (allCars: Car[]) => {
  const generateCarsButton = createElementWithClassname('button', 'race secondary-button');

  generateCarsButton.innerText = 'race'.toUpperCase();

  generateCarsButton.addEventListener('click', async () => {
    await Promise.all(allCars.map((car) => startEngine(car)));
  });

  return generateCarsButton;
};