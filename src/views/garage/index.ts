import { createElementWithClassname } from 'src/utils';
import { renderTitle } from 'src/views/garage/components/title';

export const renderGarageView = () => {
  const wrapper = createElementWithClassname('div', 'view garage-view');
  const title = renderTitle();

  wrapper.appendChild(title);

  return wrapper;
};