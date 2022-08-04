import {
  renderComponentWithColorPicker,
} from 'src/views/garage/components/car-management/utils/component-with-color-picker';
import { updateCarByApi } from 'src/api';

export const renderUpdateCar = (wrapper: HTMLElement) => {
  return renderComponentWithColorPicker('update', updateCarByApi, wrapper);
};