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

export enum Status {
  STARTED = 'started',
  STOPPED = 'stopped',
}

export type StatusType = Status.STARTED | Status.STOPPED;