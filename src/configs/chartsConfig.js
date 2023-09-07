const height = window.innerHeight;
const rowsNumber = 4;
const gutter = 10;

export const config = {
  rowHeight: Math.floor((height - gutter * (rowsNumber + 1)) / 4),
  colsNumber: 8,
};
