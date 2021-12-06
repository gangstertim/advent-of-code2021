const { parseInput } = require('../parseInput');

function solve1(data) {
  const grid = [];
  count = 0;
  data.forEach(line => {
    line = line.split(' -> ');

    if (isCol(line)) {
      let x = parseInt(line[0].split(',')[0]);
      let a = line[0].split(',')[1];
      let b = line[1].split(',')[1];
      let start = Math.min(a,b);
      let end = Math.max(a,b);
      
      for (i = start; i<=end; i++) {
        grid[i] = grid[i] || [];
        if (grid[i][x]) {
          grid[i][x] = grid[i][x] + 1;
        } else {
          grid[i][x] = 1;
        }
        if (grid[i][x] === 2) count++;
      }
    } else if (isRow(line)) {
      let y = parseInt(line[0].split(',')[1]);
      let a = line[0].split(',')[0];
      let b = line[1].split(',')[0];
      let start = Math.min(a,b);
      let end = Math.max(a,b);
      
      grid[y] = grid[y] || [];
      for (i = start; i<=end; i++) { 
        if (grid[y][i]) {
          grid[y][i] = grid[y][i] + 1;
        } else {
          grid[y][i] = 1;
        }
        if (grid[y][i] === 2) count++;
      }
    } else { // diag
      let y0 = parseInt(line[0].split(',')[0]);
      let y1 = parseInt(line[1].split(',')[0]);
      let x0 = parseInt(line[0].split(',')[1]);
      let x1 = parseInt(line[1].split(',')[1]);
    
      if (x0 < x1) {
        for(i=0; x0+i<=x1; i++) {
          grid[x0+i] = grid[x0+i] || [];
          if (y0 < y1) {
            grid[x0+i][y0+i] = grid[x0+i][y0+i] || 0;
            grid[x0+i][y0+i] = grid[x0+i][y0+i] + 1;
            if (grid[x0+i][y0+i] === 2) count++;
          } else {
            grid[x0+i][y0-i] = grid[x0+i][y0-i] || 0;
            grid[x0+i][y0-i] = grid[x0+i][y0-i] + 1;
            if (grid[x0+i][y0-i] === 2) count++;
          }
        }
      } else {
        for(i=0; x0-i>=x1; i++) {
          grid[x0-i] = grid[x0-i] || [];
          if (y0 < y1) {
            grid[x0-i][y0+i] = grid[x0-i][y0+i] || 0;
            grid[x0-i][y0+i] = grid[x0-i][y0+i] + 1;
            if (grid[x0-i][y0+i] === 2) count++;
          } else {
            grid[x0-i][y0-i] = grid[x0-i][y0-i] || 0;
            grid[x0-i][y0-i] = grid[x0-i][y0-i] + 1;
            if (grid[x0-i][y0-i] === 2) count++;
          }
        }
      }
    }
  });

  // for (let x=0; x<10; x++) {
  //   for (let y=0; y<10; y++) {
  //     grid[x][y] = grid[x][y] || 0;
  //   }
  // }
  // console.log(grid);
  console.log(count);
}

function solve2(data) {
  return data;
}

function isCol(line) {
  return line[0].split(',')[0] === line[1].split(',')[0];
}
function isRow(line) {
  return line[0].split(',')[1] === line[1].split(',')[1];
}

const data = parseInput('./5/input.txt');
const solution1 = solve1(data);
const solution2 = solve2(data);

module.exports = {
	solution1,
  solution2,
};
