const height = window.innerHeight;
const rows = 4;
const gutter = 10;

export const config = {
  rowHeight: Math.floor((height - gutter * (rows + 1)) / 4),
  colsNumber: 8,
};
