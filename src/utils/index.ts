export const createElementWithClassname = (
  tag: string,
  className: string,
): HTMLElement => {
  const newElement = document.createElement(tag);
  newElement.className = className;

  return newElement;
};

export const createButtonWithLabel = (label: string): HTMLButtonElement => {
  const button = <HTMLButtonElement>createElementWithClassname('button', 'primary-button');
  button.innerText = label;

  return button;
};