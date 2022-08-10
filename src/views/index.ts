import { renderHeader } from 'src/views/common/header';
import { renderMain } from 'src/views/common/main';

export const renderApp = async () => {
  const body = document.body;
  const main = await renderMain();
  const header = await renderHeader();

  body.appendChild(header);
  body.appendChild(main);

  return body;
};
