import { createElementWithClassname } from 'src/utils';
import { getCarById } from 'src/api';
import { Car } from 'src/types';

export const renderSelectButton = (car: Car) => {
  const selectButton = createElementWithClassname('button', 'select secondary-button');

  selectButton.innerText = 'Select';

  selectButton.addEventListener('click', async () => {
    localStorage.setItem('selectedCar', `${car.id}`);
    await getCarById(car.id || 0);
    const carNameInput = <HTMLInputElement>document.querySelector('.car-update__wrapper.car-name');
    const carColorInput = <HTMLInputElement>document.querySelector('.car-update__wrapper.car-color');

    carNameInput.value = car.name;
    carColorInput.value = car.color;
  });

  return selectButton;
};