import { createElementWithClassname } from 'src/utils';
import { Car } from 'src/types';
import { renderCarCard } from 'src/views/garage/components';

export const renderComponentWithColorPicker = (
  action: string,
  actionFunction: (name: string, color: string) => Promise<Car>,
  carCardsWrapper: HTMLElement,
) => {
  const createCarWrapper = createElementWithClassname('div', `car-${action}__wrapper cars-management__row`);
  const carNameInput = <HTMLInputElement>createElementWithClassname('input', `car-${action}__wrapper car-name`);
  const carColorSelector = <HTMLInputElement>createElementWithClassname('input', `car-${action}__wrapper car-color`);
  const submitButton = createElementWithClassname('button', `car-${action}__wrapper ${action} secondary-button`);

  carColorSelector.type = 'color';
  submitButton.innerText = action.toUpperCase();

  createCarWrapper.appendChild(carNameInput);
  createCarWrapper.appendChild(carColorSelector);
  createCarWrapper.appendChild(submitButton);

  submitButton.addEventListener('click', async () => {
    const newCar = await actionFunction(carNameInput.value, carColorSelector.value);
    carCardsWrapper.appendChild(renderCarCard(newCar));

    console.log(newCar);
  });

  return createCarWrapper;
};