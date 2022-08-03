import { baseUrl } from 'src/api/constants';
import { Car } from 'src/types';

export const getAllCars = async (): Promise<Car[]> => {
  const response = await fetch(`${baseUrl}/garage`);

  return response.json();
};