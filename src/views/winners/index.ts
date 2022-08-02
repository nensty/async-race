import { createElementWithClassname } from 'src/utils';
import { renderTitle } from 'src/views/winners/components/title';

export const renderWinnersView = () => {
  const wrapper = createElementWithClassname('div', 'view winners-view');
  const title = renderTitle();

  wrapper.appendChild(title);

  return wrapper;
};