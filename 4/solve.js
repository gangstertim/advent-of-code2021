const { parseInput } = require('../parseInput');

const data = parseInput('./4/input.txt');
const solution1 = solve1(data);
const solution2 = solve2(data);




function solve1(data) {
  const nums = getNums(data);
  const boards = getBoards(data);
  let winningBoard;
  let winningNum;

  for (let i=0; i<nums.length; i++) {
    let drawn = nums[i];
    boards.forEach((board, boardNo) => {
      if (winningBoard) return;

      board.forEach(row => {
        //update the rows
        row.forEach((el, i) => {
          if (el == drawn) row[i] = -1;
        });
        //check rows for winner
        if (row.filter(el => el === -1).length === 5) {
          winningBoard = boardNo;
        }
      });
      //check columns for winner
      for (let i = 0; i < board.length; i++) {
        let col = [];
        board.forEach(row => {
          col.push(row[i]);
        });

        if (col.filter(el => el === -1).length === 5) {
          winningBoard = boardNo;
        }
      }
    });
    if (winningBoard) {
      winningNum = drawn;
      break;
    }
  }

  return winningNum * sumUncalled(boards[winningBoard]);
}

function solve2(data) {
  const nums = getNums(data);
  const boards = getBoards(data);
  let winningBoards = [];
  let winningNum;

  for (let i=0; i<nums.length; i++) {
    let drawn = nums[i];

    if (winningBoards.length === boards.length) {
      winningNum = nums[i-1];
      break;
    }

    boards.forEach((board, boardNo) => {
      if (winningBoards.includes(boardNo)) return;
      
      board.forEach(row => {
        //update the rows
        row.forEach((el, i) => {
          if (el == drawn) row[i] = -1;
        });
        //check rows for winner
        if (row.filter(el => el === -1).length === 5) {
          winningBoards.push(boardNo);
          return;
        }
      });

      if (winningBoards.includes(boardNo)) return;
      //check columns for winner
      for (let i = 0; i < board.length; i++) {
        let col = [];
        board.forEach(row => {
          col.push(row[i]);
        });

        if (col.filter(el => el === -1).length === 5) {
          winningBoards.push(boardNo);
        }
      }
    });
  }
  return winningNum * sumUncalled(boards[winningBoards[winningBoards.length-1]]);
}

function sumUncalled(board) {
  let sum = 0;
  board.forEach(row => {
    row.forEach(el => {
      if (el != -1) {
        sum+=el;
      }
    });
  });
  return sum;
}
function getNums(data) {
  const nums = data[0].split(',')
  nums.forEach((el, i) => nums[i] = parseInt(el));
  return nums;
};

function getBoards(data) {
  const boards = [];
  let board;

  for (let i = 1; i<data.length; i++) {
    if (data[i] === '') {
      boards[parseInt(i-1)/6] = [];
      board = boards[parseInt(i-1)/6];
    } else {
      let row = [];
      data[i].split(' ').filter(el => el).forEach((el,i) => row[i] = parseInt(el));
      board.push(row);
    }
  }
  return boards;
}

module.exports = {
	solution1,
  solution2,
};
