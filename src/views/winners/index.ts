import { createElementWithClassname } from 'src/utils';
import { renderCurrentPageNumber } from 'src/views/common/components/page-number';
import { renderTitle } from 'src/views/common/components/title';
import { getAllCars } from 'src/api';

export const renderWinnersView = async () => {
  const wrapper = createElementWithClassname('div', 'view winners-view hidden');
  const title = await renderTitle('Winners', getAllCars);
  const page = renderCurrentPageNumber(+localStorage.getItem('page')!);

  wrapper.appendChild(title);
  wrapper.appendChild(page);

  return wrapper;
};