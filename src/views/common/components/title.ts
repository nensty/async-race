import { createElementWithClassname } from 'src/utils';

export const renderTitle = (pageName: string, numberOfItems: number) => {
  const title = createElementWithClassname('h2', 'garage-title');
  title.innerText = `${pageName} (${numberOfItems})`;

  return title;
};