import { createElementWithClassname } from 'src/utils';
import { renderCurrentPageNumber } from 'src/views/common/components/page-number';
import { renderTitle } from 'src/views/common/components/title';

export const renderWinnersView = async () => {
  const wrapper = createElementWithClassname('div', 'view winners-view hidden');
  const title = renderTitle('Winners', 1);
  const page = renderCurrentPageNumber();

  wrapper.appendChild(title);
  wrapper.appendChild(page);

  return wrapper;
};