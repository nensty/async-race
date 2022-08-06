import { startStopEngine } from 'src/api';
import { Car, Status } from 'src/types';
import { CAR_WIDTH } from 'src/views/garage/constants';

export const startEngine = async (car: Car) => {
  const carCard = <HTMLDivElement>document.querySelector('.car-card__configuration');
  const carImage = <SVGElement>carCard.querySelector('svg');
  const carDrivingSettings = await startStopEngine({ id: car.id!, status: Status.STARTED });

  carImage.style.transform = `translateX(${document.body.offsetWidth - CAR_WIDTH}px)`;
  carImage.style.transition = `ease ${carDrivingSettings.distance / carDrivingSettings.velocity}ms`;
};