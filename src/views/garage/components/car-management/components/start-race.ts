import { createElementWithClassname } from 'src/utils';
import { Car } from 'src/types';
import { startEngine } from 'src/views/garage/utils/start-engine';
import { createTableRow } from 'src/views/winners/utils/create-table';

export const renderStartRace = (allCars: Car[]) => {
  const startRaceButton = createElementWithClassname('button', 'race secondary-button');

  startRaceButton.innerText = 'race'.toUpperCase();
  const handleClick = async () => {
    return Promise.any(allCars.map((car) => startEngine(car)))
      .then((firstCar) => {
        const carCard = <HTMLDivElement>document.getElementById(`${firstCar.id}`);
        const carImage = <SVGElement>carCard.querySelector('svg');
        const tbody = <HTMLTableSectionElement>document.querySelector('tbody');

        carImage.addEventListener('transitionend', () => {
          alert(`${firstCar.name} went first, [${(firstCar.distance / firstCar.velocity / 1000).toFixed(2)}s]`);
        }, false);

        const row = createTableRow(tbody, firstCar);
        tbody.appendChild(row);
      });
  };

  startRaceButton.addEventListener('click', handleClick);

  return startRaceButton;
};