import { baseUrl } from 'src/api/constants';
import { Car, CarDrivingSettings, CarState } from 'src/types';

export const getAllCars = (page = 1, limit = 7): Promise<Car[]> =>
  fetch(`${baseUrl}/garage/?_page=${page}&_limit=${limit}`).then((response) => response.json());

export const getCarById = (id: number): Promise<Car> =>
  fetch(`${baseUrl}/garage/${id}`).then((response) => response.json());

export const createCarByApi = ({ name, color }: Car): Promise<Car> =>
  fetch(`${baseUrl}/garage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      color,
    }),
  }).then((response) => response.json());

export const updateCarByApi = ({ name, color, id }: Car): Promise<Car> =>
  fetch(`${baseUrl}/garage/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      color: color,
    }),
  }).then((response) => response.json());

export const removeCarById = (id: number): Promise<Record<string, never>> =>
  fetch(`${baseUrl}/garage/${id}`, {
    method: 'DELETE',
  }).then((response) => response.json());

export const startEngine = ({ id, status }: CarState): Promise<CarDrivingSettings> =>
  fetch(`${baseUrl}/engine?id=${id}&status=${status}`, {
    method: 'PATCH',
  }).then((response) => response.json());

