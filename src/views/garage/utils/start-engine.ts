import { getCarById, startStopEngine } from 'src/api';
import { Car, FullCarInfo, Status } from 'src/types';
import { CAR_WIDTH } from 'src/views/garage/constants';

export const startEngine = async (car: Car): Promise<FullCarInfo> => {
  const carCard = <HTMLDivElement>document.getElementById(`${car.id}`);
  const carImage = <SVGElement>carCard.querySelector('svg');
  const carDrivingSettings = await startStopEngine({ id: car.id!, status: Status.STARTED });
  const currentCar = await getCarById(car.id!);

  carImage.style.animationPlayState = 'running';
  carImage.style.transform = `translateX(${document.body.offsetWidth - CAR_WIDTH}px)`;
  carImage.style.transition = `ease ${carDrivingSettings.distance / carDrivingSettings.velocity}ms`;

  const driveResponse = await startStopEngine({ id: car.id!, status: Status.DRIVE });

  if (driveResponse.status === 500) {
    await startStopEngine({ id: car.id!, status: Status.STOPPED });

    const coordinates = carImage.getBoundingClientRect();
    carImage.style.animation = 'none';
    carImage.style.animationPlayState = 'paused';
    carImage.style.transform = `translateX(${coordinates.x - CAR_WIDTH / 2}px)`;
  }

  return { ...currentCar, ...carDrivingSettings };
};