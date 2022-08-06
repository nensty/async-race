import { createElementWithClassname } from 'src/utils';
import { renderCreateCar } from 'src/views/garage/components/car-management/components/create';
import { renderUpdateCar } from 'src/views/garage/components/car-management/components/update';
import { renderGenerateCars } from 'src/views/garage/components/car-management/components/generate-cars';
import { renderStartRace } from 'src/views/garage/components/car-management/components/start-race';
import { renderResetResult } from 'src/views/garage/components/car-management/components/reset-result';
import { Car } from 'src/types';

export const renderCarManagement = (carsListWrapper: HTMLElement, allCars: Car[]) => {
  const managementWrapper = createElementWithClassname('div', 'cars-management');
  const managementControlsWrapper = createElementWithClassname('div', 'cars-management__row controls');
  const createCar = renderCreateCar(carsListWrapper);
  const updateCar = renderUpdateCar(carsListWrapper);
  const generateCars = renderGenerateCars(carsListWrapper);
  const startRace = renderStartRace(allCars);
  const resetResult = renderResetResult();

  managementWrapper.append(createCar);
  managementWrapper.append(updateCar);
  managementWrapper.append(managementControlsWrapper);
  managementControlsWrapper.append(startRace);
  managementControlsWrapper.append(resetResult);
  managementControlsWrapper.append(generateCars);

  return managementWrapper;
};