import { createElementWithClassname } from 'src/utils';

export const renderTitle = () => {
  const title = createElementWithClassname('h2', 'garage-title');
  title.innerText = 'Winners';

  return title;
};