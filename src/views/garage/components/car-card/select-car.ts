import { createElementWithClassname } from 'src/utils';

export const renderSelectButton = () => {
  const selectButton = createElementWithClassname('button', 'select secondary-button');

  selectButton.innerText = 'Select';

  return selectButton;
};