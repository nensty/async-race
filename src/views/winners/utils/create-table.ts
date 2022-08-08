import { createElementWithClassname } from 'src/utils';
import { FullCarInfo } from 'src/types';

const generateTableCell = (text: string) => {
  const cell = document.createElement('td');
  const cellText = document.createTextNode(text);
  cell.appendChild(cellText);

  return cell;
};

export const createTableRow = (tableHead: HTMLTableSectionElement, { id, name, distance, velocity }: FullCarInfo) => {
  const row = tableHead.insertRow();

  const trId = generateTableCell(`${id}`);
  const trCar = <HTMLTableElement>createElementWithClassname('span', 'winners-table winners-table__tr');
  const trName = generateTableCell(name);
  const trWins = generateTableCell('1');
  const trBestTime = generateTableCell((distance / velocity).toFixed(2));

  row.style.color = 'white';
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
  const tableHeadRow = tableHead.insertRow();

  const number = generateTableCell('Number');
  const car = generateTableCell('Car');
  const name = generateTableCell('Name');
  const wins = generateTableCell('Wins');
  const time = generateTableCell('Best Time');

  tableHeadRow.insertCell(0).appendChild(number);
  tableHeadRow.insertCell(1).appendChild(car);
  tableHeadRow.insertCell(2).appendChild(name);
  tableHeadRow.insertCell(3).appendChild(wins);
  tableHeadRow.insertCell(4).appendChild(time);

  tableHead.appendChild(tableHeadRow);
  table.appendChild(tableHead);
  table.appendChild(tableBody);

  wrapper.appendChild(table);
};