export const randInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randFloat = (min: number, max: number, decimals: number = 2): number => {
  const rand = Math.random() * (max - min) + min;
  return parseFloat(rand.toFixed(decimals));
};
