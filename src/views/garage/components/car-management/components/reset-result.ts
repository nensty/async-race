import { createElementWithClassname } from 'src/utils';
import { Car } from 'src/types';
import { stopEngine } from 'src/views/garage/utils/stop-engine';

export const renderResetResult = (allCars: Car[]) => {
  const resetResultButton = createElementWithClassname('button', 'reset secondary-button');

  resetResultButton.innerText = 'reset'.toUpperCase();

  resetResultButton.addEventListener('click', async () => {
    await Promise.all(allCars.map((car) => stopEngine(car)
      .then((currentCar) => currentCar)))
      .then(car => car);
  });

  return resetResultButton;
};