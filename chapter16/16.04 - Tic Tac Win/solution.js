const X = 'X';
const O = 'O';

function ticTacWin(board) {
  if (!board) return null;

  const n = board.length; // assuming square board
  const lastCell = n - 1;

  // Check Rows and Cols
  for (let i = 0; i < n; i++) {
    const rowChar = board[i][0];
    for (let j = 1; j < n; j++) {
      if (board[i][j] !== rowChar) break;
      else if (j === lastCell) return rowChar;
    }

    const colChar = board[i][0];
    for (let j = 1; j < n; j++) {
      if (board[j][i] !== colChar) break;
      else if (j === lastCell) return colChar;
    }
  }

  // Check Main Cross
  const mainCrossChar = board[0][0];
  for (let i = 1; i < n; i++) {
    if (board[i][i] !== mainCrossChar) break;
    else if (i === lastCell) return mainCrossChar;
  }

  // Check Sub Cross
  const subCrossChar = board[0][lastCell];
  for (let i = 1; i < n; i++) {
    if (board[i][lastCell - i] !== subCrossChar) break;
    else if (i === lastCell) return subCrossChar;
  }

  return null;
}

// TESTS

console.log(
  ticTacWin([
    ['O', 'X', 'O'],
    ['X', 'X', 'X'],
    ['O', 'O', 'X'],
  ])
);

console.log(
  ticTacWin([
    ['O', 'X', 'O'],
    ['O', 'X', 'X'],
    ['O', 'O', 'X'],
  ])
);

console.log(
  ticTacWin([
    ['O', 'X', 'O'],
    ['O', 'O', 'X'],
    ['X', 'O', 'O'],
  ])
);

console.log(
  ticTacWin([
    ['O', 'X', 'X'],
    ['O', 'X', 'X'],
    ['X', 'O', 'O'],
  ])
);

console.log(
  ticTacWin([
    ['O', 'X', 'O'],
    ['O', 'X', 'X'],
    ['X', 'O', 'O'],
  ])
);
