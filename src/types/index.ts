export interface Car {
  name: string;
  color: string;
  id?: number;
}

export interface CarState {
  id: number;
  status: StatusType;
}

export interface CarDrivingSettings {
  velocity: number;
  distance: number;
}

export type FullCarInfo = CarDrivingSettings & Car;

export enum Status {
  STARTED = 'started',
  DRIVE = 'drive',
  STOPPED = 'stopped',
}

export type StatusType = Status.STARTED | Status.DRIVE | Status.STOPPED;