import { createElementWithClassname } from 'src/utils';
import { removeCarById } from 'src/api';
import { updateCarsNumber } from 'src/views/garage/utils/update-cars-number';

export const renderRemoveCarButton = (id: number) => {
  const removeButton = createElementWithClassname('button', 'remove secondary-button');

  removeButton.innerText = 'Remove';

  removeButton.addEventListener(('click'), async () => {
    document.getElementById(id.toString())!.remove();

    await removeCarById(id);
    await updateCarsNumber();
  });

  return removeButton;
};