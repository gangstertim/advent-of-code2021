const { parseInput } = require('../parseInput');

function solve1(map, steps) {
  let flashes = 0;
  for (let s=0; s<steps; s++) {
    // increase everything by 1
    map.forEach((row, i) => row.forEach((cell, j) => map[i][j] = cell+1));

    // trigger flashes
    while (flashesRemaining()) {
      map.forEach((row, i) => row.forEach((cell, j) => {
        if (cell === 10) {
          flash(i,j);
          flashes++;
          map[i][j] = 11;
        } 
      }));
    }

    //reset 0s
    let flashesThisStep = 0;
    map.forEach((row, i) => row.forEach((cell, j) => {
      if (cell >= 10) {
        map[i][j] = 0;
        flashesThisStep++;
      }
    }));
    if (flashesThisStep === (map.length * map[0].length)) {
      console.log('steps:', s+1);
      break;
    }   
  }
  console.log('flashes:', flashes);
}

function flashesRemaining() {
  let contains10 = false;
  map.forEach(row => row.forEach(cell => {
    if (cell === 10) contains10 = true; 
  }));
  return contains10;
}

function flash(i, j) {
  const minI = Math.max(0, i-1);
  const minJ = Math.max(0, j-1);
  const maxI = Math.min(map.length-1, i+1);
  const maxJ = Math.min(map[0].length-1, j+1);
  for (i = minI; i<=maxI; i++) {
    for (j = minJ; j<=maxJ; j++) {
      if (map[i][j] !== 10) map[i][j] = map[i][j] + 1;
    }
  }
}
function solve2(data) {
  return data;
}

const data = parseInput('./11/input.txt');
const map = [];
data.forEach(el => {
  let arr = [];
  el.split('').forEach(num => arr.push(parseInt(num)));
  map.push(arr);
});
const solution1 = solve1(map, 1000);
const solution2 = solve2(data);

module.exports = {
	solution1,
  solution2,
};
