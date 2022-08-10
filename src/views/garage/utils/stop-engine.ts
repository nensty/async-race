import { getCarById, startStopEngine } from 'src/api';
import { Car, FullCarInfo, Status } from 'src/types';

export const stopEngine = async (car: Car): Promise<FullCarInfo> => {
  const carCard = <HTMLDivElement>document.getElementById(`${car.id}`);
  const carImage = <SVGElement>carCard.querySelector('svg');
  const carDrivingSettings = await startStopEngine({ id: car.id!, status: Status.STOPPED });
  const currentCar = await getCarById(car.id!);

  carImage.style.transform = 'none';
  carImage.style.transition = 'none';

  return { ...currentCar, ...carDrivingSettings };
};