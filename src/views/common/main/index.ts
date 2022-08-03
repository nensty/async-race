import { createElementWithClassname } from 'src/utils';
import { renderGarageView } from 'src/views/garage';
import { renderWinnersView } from 'src/views/winners';

export const renderMain = async () => {
  const main = createElementWithClassname('main', 'main');
  const mainWrapper = createElementWithClassname('div', 'wrapper');
  const garageView = renderGarageView();
  const winnersView = renderWinnersView();

  main.appendChild(mainWrapper);
  mainWrapper.appendChild(await garageView);
  mainWrapper.appendChild(winnersView);

  return main;
};