import { createElementWithClassname } from 'src/utils';
import { FullCarInfo } from 'src/types';

const generateTableCell = (text: string) => {
  const cell = document.createElement('td');
  const cellText = document.createTextNode(text);
  cell.appendChild(cellText);

  return cell;
};

export const createTableRow = (tableHead: HTMLTableElement, { id, name, distance, velocity }: FullCarInfo) => {
  const row = tableHead.insertRow(1);

  const trId = generateTableCell(`${id}`);
  const trCar = <HTMLTableElement>createElementWithClassname('span', 'winners-table winners-table__tr');
  const trName = generateTableCell(name);
  const trWins = generateTableCell('1');
  const trBestTime = generateTableCell((distance / velocity).toFixed(2));

  row.style.color = 'white';
  row.style.display = 'flex';
  row.style.columnGap = '2rem';

  row.insertCell(0).appendChild(trId);
  row.insertCell(1).appendChild(trCar);
  row.insertCell(2).appendChild(trName);
  row.insertCell(3).appendChild(trWins);
  row.insertCell(4).appendChild(trBestTime);

  return row;
};

export const createTable = (wrapper: HTMLDivElement) => {
  const table = <HTMLTableElement>createElementWithClassname('table', 'winners-table');
  table.style.color = 'white';

  const tableBody = <HTMLBodyElement>createElementWithClassname('tbody', 'winners-table winners-table__body');
  const tableHead = table.createTHead();
  const tableHeadRow = tableHead.insertRow(0);
  tableHeadRow.insertCell(0).textContent = 'Number';
  tableHeadRow.insertCell(1).textContent = 'Car';
  tableHeadRow.insertCell(2).textContent = 'Name';
  tableHeadRow.insertCell(3).textContent = 'Wins';
  tableHeadRow.insertCell(4).textContent = 'Best Time';

  table.appendChild(table.createTHead());
  table.appendChild(tableBody);

  wrapper.appendChild(table);
};