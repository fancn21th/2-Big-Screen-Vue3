const rowsNumber = 4;

export const config = {
  // gutter is equal to margin by referring to source code for grid layout
  // margin: () => [10, 10]
  getRowHeight: (height = window.innerHeight, gutter = 10) =>
    Math.floor((height - gutter * (rowsNumber + 1)) / 4),
  colsNumber: 8,
};
