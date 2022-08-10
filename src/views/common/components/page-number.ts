import { createElementWithClassname } from 'src/utils';

export const renderCurrentPageNumber = (page: number) => {
  const pageNumber = createElementWithClassname('p', 'garage-view__current-page');

  pageNumber.innerText = `Page #${page}`;

  return pageNumber;
};