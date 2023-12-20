export type Range = {
  start: number;
  length: number;
};
export const range = ({ start, length }: Range) => {
  return Array.from({ length }, (_, index) => start + index);
};
