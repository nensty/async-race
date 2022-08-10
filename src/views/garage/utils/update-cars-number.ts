import { renderTitle } from 'src/views/common/components/title';
import { getAllCars } from 'src/api';

export const updateCarsNumber = async () => {
  const garageTitle = document.querySelector('.garage-title')!;
  const number = await renderTitle('Garage', getAllCars);
  garageTitle.textContent = number.textContent;
};