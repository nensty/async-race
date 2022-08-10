import { createElementWithClassname } from 'src/utils';
import { renderGarageView } from 'src/views/garage';
import { renderWinnersView } from 'src/views/winners';

export const renderMain = async () => {
  const main = createElementWithClassname('main', 'main');
  const mainWrapper = createElementWithClassname('div', 'wrapper');
  const garageView = await renderGarageView();
  const winnersView = await renderWinnersView();

  main.appendChild(mainWrapper);
  mainWrapper.appendChild(garageView);
  mainWrapper.appendChild(winnersView);

  return main;
};