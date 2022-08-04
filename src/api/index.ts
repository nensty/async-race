import { baseUrl } from 'src/api/constants';
import { Car } from 'src/types';

export const getAllCars = async (): Promise<Car[]> =>
  fetch(`${baseUrl}/garage`).then((response) => response.json());