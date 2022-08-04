import {
  renderComponentWithColorPicker,
} from 'src/views/garage/components/car-management/utils/component-with-color-picker';
import { createCarByApi } from 'src/api';

export const renderUpdateCar = (wrapper: HTMLElement) => {
  return renderComponentWithColorPicker('update', createCarByApi, wrapper);
};