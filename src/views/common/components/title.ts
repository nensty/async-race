import { createElementWithClassname } from 'src/utils';
import { Car } from 'src/types';

export const getNumberOfItems = <T extends Car>(fetchFunction: () => Promise<T[]>) => fetchFunction()
  .then((res) => res.length);

export const renderTitle = async <T extends Car>(pageName: string, fetchFunction: () => Promise<T[]>) => {
  const title = createElementWithClassname('h2', 'garage-title');
  const numberOfItems = await getNumberOfItems(fetchFunction);

  title.innerText = `${pageName} (${numberOfItems})`;

  return title;
};