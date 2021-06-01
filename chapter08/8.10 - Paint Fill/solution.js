const paintFill = (img, i, j, color) => {
  const originColor = img[i][j];
  const rows = img.length;
  const cols = img[0].length;

  const helper = (i, j) => {
    if (i >= 0 && i < rows && j >= 0 && j < cols && img[i][j] === originColor) {
      img[i][j] = color;

      helper(i - 1, j);
      helper(i + 1, j);
      helper(i, j - 1);
      helper(i, j + 1);
    }
  };

  helper(i, j);
};

// TESTS

// prettier-ignore
const image = [
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 2, 2, 2],
    [0, 2, 2, 2,]
];

paintFill(image, 2, 2, 3);

image.forEach(row => console.log(row));
