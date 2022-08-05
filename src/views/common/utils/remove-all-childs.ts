export const removeAllChilds = (wrapper: HTMLElement, allCarCards: NodeListOf<Element>) => {
  for (const child of allCarCards) {
    wrapper.removeChild(child);
  }
};