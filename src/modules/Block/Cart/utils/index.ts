export const nameNormalize = (modalName: string): string => {
  if (modalName.length > 45) return modalName.slice(0, 42).padEnd(45, '.');

  return modalName;
};
