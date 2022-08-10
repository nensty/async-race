import {
  createComponentWithColorPicker,
} from 'src/views/garage/components/car-management/utils/create-component-with-color-picker';
import { updateCarByApi } from 'src/api';

export const renderUpdateCar = (wrapper: HTMLElement) => {
  const updateCarWrapper = createComponentWithColorPicker('update');
  const submitButton = <HTMLButtonElement>updateCarWrapper.querySelector('button');
  const carNameInput = <HTMLInputElement>updateCarWrapper.querySelector('.car-name');
  const carColorSelector = <HTMLInputElement>updateCarWrapper.querySelector('.car-color');

  submitButton.addEventListener('click', async () => {
    const selectedCarId = localStorage.getItem('selectedCar');
    const updatedCar = await updateCarByApi(
      {
        name: carNameInput.value,
        color: carColorSelector.value,
        id: Number(selectedCarId),
      });

    const selectedCarItem = (Array.from(wrapper.childNodes) as HTMLDivElement[]).filter((node) =>
      node.id === selectedCarId)[0];
    const carSvg = <SVGPathElement>selectedCarItem.querySelector('svg path');
    const carName = <HTMLHeadingElement>selectedCarItem.querySelector('.car-title');

    carName.textContent = updatedCar.name;
    carSvg.style.fill = updatedCar.color;
  });

  return updateCarWrapper;
};