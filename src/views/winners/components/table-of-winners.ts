import { createElementWithClassname } from 'src/utils';
import { createTable } from 'src/views/winners/utils/create-table';

export const renderTableOfWinners = () => {
  const tableWrapper = <HTMLDivElement>createElementWithClassname('div', 'winners-table-wrapper');
  createTable(tableWrapper);

  return tableWrapper;
};