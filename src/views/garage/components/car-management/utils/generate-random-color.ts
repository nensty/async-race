export const generateRandomColor = (): string => {
  const randomHex = (size: number) =>
    [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

  return `#${randomHex(6)}`;
};