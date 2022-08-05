import { renderCarCard } from 'src/views/garage/components';
import { Car } from 'src/types';

export const renderAllCarCards = (wrapper: HTMLElement, cars: Car[]) => {
  for (const car of cars) {
    wrapper.appendChild(renderCarCard(car));
  }
};