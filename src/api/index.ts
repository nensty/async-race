import { baseUrl } from 'src/api/constants';
import { Car } from 'src/types';

export const getAllCars = (): Promise<Car[]> =>
  fetch(`${baseUrl}/garage`).then((response) => response.json());

export const createCarByApi = (name: string, color: string): Promise<Car> =>
  fetch(`${baseUrl}/garage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      color: color,
    }),
  }).then((response) => response.json());