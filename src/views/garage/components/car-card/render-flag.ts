import { createElementWithClassname } from 'src/utils';

export const renderFlag = () => {
  const flagImage = <HTMLImageElement>createElementWithClassname('img', 'flag');

  flagImage.src = 'assets/flag-pngrepo-com.png';

  return flagImage;
};