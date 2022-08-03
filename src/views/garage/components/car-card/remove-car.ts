import { createElementWithClassname } from 'src/utils';

export const renderRemoveCarButton = () => {
  const removeButton = createElementWithClassname('button', 'remove secondary-button');

  removeButton.innerText = 'Remove';

  return removeButton;
};