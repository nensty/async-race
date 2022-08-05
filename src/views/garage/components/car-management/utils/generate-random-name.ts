const carsMarksMap = new Map([
  [0, 'Toyota'],
  [1, 'Porsche'],
  [2, 'Maserati'],
  [3, 'Ferrari'],
  [4, 'BMW'],
  [5, 'Alpine'],
  [6, 'Ford'],
  [7, 'Audi'],
  [8, 'Aston'],
  [9, 'Citroen'],
]);

const carsModelsMap = new Map([
  [0, 'Yaris'],
  [1, 'Cayman'],
  [2, 'Roma'],
  [3, 'MC20'],
  [4, 'X8'],
  [5, 'ST'],
  [6, 'Fiesta'],
  [7, 'A3'],
  [8, 'GT'],
  [9, 'C5'],
]);

export const generateRandomName = (): string => {
  const randomDigit = Math.floor(Math.random() * 10);
  return `${carsMarksMap.get(randomDigit)} ${carsModelsMap.get(randomDigit)}`;
};