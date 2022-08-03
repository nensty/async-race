import { createElementWithClassname } from 'src/utils';

export const renderStartRace = () => {
  const generateCarsButton = createElementWithClassname('button', 'race secondary-button');

  generateCarsButton.innerText = 'race'.toUpperCase();

  return generateCarsButton;
};