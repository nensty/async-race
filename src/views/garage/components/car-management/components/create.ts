import { createCarByApi } from 'src/api';
import {
  createComponentWithColorPicker,
} from 'src/views/garage/components/car-management/utils/create-component-with-color-picker';
import { renderCarCard } from 'src/views/garage/components';
import { updateCarsNumber } from 'src/views/garage/utils/update-cars-number';

export const renderCreateCar = (wrapper: HTMLElement) => {
  const createCarWrapper = createComponentWithColorPicker('create');
  const submitButton = <HTMLButtonElement>createCarWrapper.querySelector('button');
  const carNameInput = <HTMLInputElement>createCarWrapper.querySelector('.car-name');
  const carColorSelector = <HTMLInputElement>createCarWrapper.querySelector('.car-color');

  submitButton.addEventListener('click', async () => {
    const newCar = await createCarByApi({ name: carNameInput.value, color: carColorSelector.value });
    wrapper.appendChild(renderCarCard(newCar));

    await updateCarsNumber();
  });

  return createCarWrapper;
};