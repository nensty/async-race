export const showGarageViewOnClick = (garageViewButton: HTMLButtonElement) => {
  garageViewButton.addEventListener('click', () => {
    (document.querySelector('.winners-view') as HTMLDivElement).classList.add('hidden');
    (document.querySelector('.garage-view') as HTMLDivElement).classList.remove('hidden');
  });
};

export const showWinnersViewOnClick = (winnersViewButton: HTMLButtonElement) => {
  winnersViewButton.addEventListener('click', () => {
    (document.querySelector('.winners-view') as HTMLDivElement).classList.remove('hidden');
    (document.querySelector('.garage-view') as HTMLDivElement).classList.add('hidden');
  });
};