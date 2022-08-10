import { createElementWithClassname } from 'src/utils';
import { createCarByApi } from 'src/api';
import { generateRandomName } from 'src/views/garage/components/car-management/utils/generate-random-name';
import { generateRandomColor } from 'src/views/garage/components/car-management/utils/generate-random-color';
import { renderCarCard } from 'src/views/garage/components';
import { updateCarsNumber } from 'src/views/garage/utils/update-cars-number';

export const renderGenerateCars = (wrapper: HTMLElement) => {
  const generateCarsButton = createElementWithClassname('button', 'generate secondary-button');

  generateCarsButton.innerText = 'generate cars'.toUpperCase();

  generateCarsButton.addEventListener('click', async () => {
    const newCars = [];

    for (let i = 0; i < 100; i++) {
      const newCar = await createCarByApi({ name: generateRandomName(), color: generateRandomColor() });

      newCars.push(newCar);
      wrapper.appendChild(renderCarCard(newCar));
    }

    await updateCarsNumber();
  });

  return generateCarsButton;
};