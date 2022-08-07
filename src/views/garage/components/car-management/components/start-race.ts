import { createElementWithClassname } from 'src/utils';
import { Car } from 'src/types';
import { startEngine } from 'src/views/garage/utils/start-engine';

export const renderStartRace = (allCars: Car[]) => {
  const startRaceButton = createElementWithClassname('button', 'race secondary-button');

  startRaceButton.innerText = 'race'.toUpperCase();
  const handleClick = async () => {
    await Promise.all(allCars.map((car) => startEngine(car)))
      .then((currentCars) => currentCars
        .sort((carA, carB) => {
          if (carA.distance / carA.velocity < carB.distance / carB.velocity) {
            return -1;
          }

          if (carA.distance / carA.velocity > carB.distance / carB.velocity) {
            return 1;
          }

          return 0;
        }))
      .then(cars => cars[0])
      .then((firstCar) => {
        const carCard = <HTMLDivElement>document.getElementById(`${firstCar.id}`);
        const carImage = <SVGElement>carCard.querySelector('svg');

        carImage.addEventListener('transitionend', () => {
          alert(`${firstCar.name} went first, [${(firstCar.distance / firstCar.velocity / 1000).toFixed(2)}s]`);
        });
      });
  };

  startRaceButton.addEventListener('click', handleClick);

  return startRaceButton;
};