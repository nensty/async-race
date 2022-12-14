import { createElementWithClassname } from 'src/utils';

export const createComponentWithColorPicker = (
  action: string,
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

  return createCarWrapper;
};