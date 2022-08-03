import { createElementWithClassname } from 'src/utils';

export const renderResetResult = () => {
  const generateCarsButton = createElementWithClassname('button', 'reset secondary-button');

  generateCarsButton.innerText = 'reset'.toUpperCase();

  return generateCarsButton;
};