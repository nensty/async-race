import { renderHeader } from 'src/views/common/header';
import { renderMain } from 'src/views/common/main';

export const renderApp = async () => {
  const body = document.body;
  const main = renderMain();
  const header = renderHeader();

  document.body.appendChild(header);
  document.body.appendChild(await main);

  return body;
};
