import { createElementWithClassname } from 'src/utils';
import { renderTitle } from 'src/views/common/components/title';
import { renderCurrentPageNumber } from 'src/views/common/components/page-number';
import { getAllCars } from 'src/api';
import { renderCarManagement } from 'src/views/garage/components/car-management';
import { renderPaginationControls } from 'src/views/common/components/pagination-controls';
import { renderAllCarCards } from 'src/views/garage/utils/render-all-car-cards';

export const renderGarageView = async () => {
  localStorage.setItem('page', '1');
  const allCars = await getAllCars();
  const wrapper = createElementWithClassname('div', 'view garage-view');
  const carCardsWrapper = createElementWithClassname('div', 'car-cards__wrapper');
  const carConfiguration = renderCarManagement(carCardsWrapper);
  const title = await renderTitle('Garage', getAllCars);
  const page = renderCurrentPageNumber(+localStorage.getItem('page')!);
  const pagination = renderPaginationControls(carCardsWrapper);

  wrapper.appendChild(carConfiguration);
  wrapper.appendChild(title);
  wrapper.appendChild(carCardsWrapper);
  wrapper.appendChild(pagination);
  carCardsWrapper.appendChild(page);

  renderAllCarCards(carCardsWrapper, allCars);

  return wrapper;
};