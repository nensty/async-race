import { createElementWithClassname } from 'src/utils';
import { getAllCars } from 'src/api';
import { removeAllChilds } from 'src/views/common/utils/remove-all-childs';
import { renderAllCarCards } from 'src/views/garage/utils/render-all-car-cards';
import { renderCurrentPageNumber } from 'src/views/common/components/page-number';

export const renderPaginationControls = (wrapper: HTMLElement) => {
  const paginationWrapper = <HTMLDivElement>createElementWithClassname('div', 'pagination-wrapper');
  const previousPage = <HTMLButtonElement>createElementWithClassname('button', 'previous primary-button');
  const nextPage = <HTMLButtonElement>createElementWithClassname('button', 'next primary-button');

  previousPage.innerText = 'Back';
  nextPage.innerText = 'Next';
  previousPage.disabled = true;

  previousPage.addEventListener('click', async () => {
    const page = +localStorage.getItem('page')!;
    const allCarCards = document.querySelectorAll('.car-card');

    if (+localStorage.getItem('page')! === 1) {
      previousPage.disabled = true;

      return;
    }

    localStorage.setItem('page', (page - 1).toString());
    const cars = await getAllCars(page - 1);

    removeAllChilds(wrapper, allCarCards);
    renderAllCarCards(wrapper, cars);
    renderCurrentPageNumber(+localStorage.getItem('page')!);
  });

  nextPage.addEventListener('click', async () => {
    const page = +localStorage.getItem('page')!;
    const allCarCards = document.querySelectorAll('.car-card');
    previousPage.disabled = false;

    const cars = await getAllCars(page + 1);
    localStorage.setItem('page', (page + 1).toString());

    removeAllChilds(wrapper, allCarCards);
    renderAllCarCards(wrapper, cars);
    renderCurrentPageNumber(+localStorage.getItem('page')!);
  });

  paginationWrapper.appendChild(previousPage);
  paginationWrapper.appendChild(nextPage);

  return paginationWrapper;
};