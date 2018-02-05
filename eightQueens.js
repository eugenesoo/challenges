// concept
// 8 queens = 7 queen and 1 on 0,0 + 7queen and 1 on 0,1 + 7queen and 1 on 0,2 ... 7queen and 1 on 0,7
// concept of marking non allowed spots
// 7 queens and 1 on 0,0 = 6 queen and 1 on 1,0 ...
//
//
// 1 queen and 1 on 0,0
//
//
//
class Board {
  constructor() {
    this.matrix = [];
    for (let i = 0; i < 8; i += 1) {
      this.matrix.push([]);
      for (let j = 0; j < 8; j += 1) {
        this.matrix[i].push(0);
      }
    }
    this.solutions = [];
  }

  markVertical(currentRow, currentCol, board) {
    for (let i = currentRow + 1; i < board.length; i += 1) {
      board[i][currentCol] = -1;
    }
  }

  markDiagonal(currentRow, currentCol, board) {
    // for left diagonal downwards
    let rowIndex = currentRow + 1;
    let colIndex = currentCol - 1;

    while (rowIndex < board.length && colIndex >= 0) {
      board[rowIndex][colIndex] = -1;
      rowIndex += 1;
      colIndex -= 1;
    }

    // for right diagonal downwards
    rowIndex = currentRow + 1;
    colIndex = currentCol + 1;

    while (rowIndex < board.length && colIndex < board.length) {
      board[rowIndex][colIndex] = -1;
      rowIndex += 1;
      colIndex += 1;
    }
  }

  get8Queens(currentRow = 0, board = this.matrix.slice()) {
    // iterate through the currentRow
    for (let i = 0; i < board.length; i += 1) {
      if (board[currentRow][i] >= 0) {
        board[currentRow][i] = 1;

        if (currentRow === 7) {
          this.solutions.push(board);
          board[currentRow][i] = 0;
        } else {
          const newBoard = board.slice();
          this.markVertical(currentRow, i, newBoard);
          this.markDiagonal(currentRow, i, newBoard);
          this.get8Queens(currentRow + 1, newBoard);
          board[currentRow][i] = 0;
        }
      }
    }
    // if colPosition is valid, change colPosition to 1,
    // if currentRow is last row,
    // copy board to result array
    // return;
    // clone board
    // markVertical on cloned board
    // markDiagonal on cloned board
    // recurse get8Queens(currentRow + 1, currentCol, clonedboard
    // toggle colPosition back to 0,
  }
}

