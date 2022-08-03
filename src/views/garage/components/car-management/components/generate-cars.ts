import { createElementWithClassname } from 'src/utils';

export const renderGenerateCars = () => {
  const generateCarsButton = createElementWithClassname('button', 'generate secondary-button');

  generateCarsButton.innerText = 'generate cars'.toUpperCase();

  return generateCarsButton;
};