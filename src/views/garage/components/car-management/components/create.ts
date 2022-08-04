import { createCarByApi } from 'src/api';
import {
  createComponentWithColorPicker,
} from 'src/views/garage/components/car-management/utils/create-component-with-color-picker';
import { renderCarCard } from 'src/views/garage/components';

export const renderCreateCar = (wrapper: HTMLElement) => {
  const createCarWrapper = createComponentWithColorPicker('create');
  const submitButton = <HTMLButtonElement>createCarWrapper.querySelector('button');
  const carNameInput = <HTMLInputElement>createCarWrapper.querySelector('.car-name');
  const carColorSelector = <HTMLInputElement>createCarWrapper.querySelector('.car-color');

  submitButton.addEventListener('click', async () => {
    const newCar = await createCarByApi({ name: carNameInput.value, color: carColorSelector.value });
    wrapper.appendChild(renderCarCard(newCar));
  });

  return createCarWrapper;
};