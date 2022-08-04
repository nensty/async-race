import { createElementWithClassname } from 'src/utils';
import { getCarById } from 'src/api';

export const renderSelectButton = (id: number) => {
  const selectButton = createElementWithClassname('button', 'select secondary-button');

  selectButton.innerText = 'Select';

  selectButton.addEventListener('click', async () => {
    const selectedCar = await getCarById(id);

    console.log('selectedCar', selectedCar);
  });

  return selectButton;
};