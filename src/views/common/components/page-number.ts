import { createElementWithClassname } from 'src/utils';

export const renderCurrentPageNumber = () => {
  const pageNumber = createElementWithClassname('p', 'garage-view__current-page');

  pageNumber.innerText = `Page #${1}`;

  return pageNumber;
};