const { parseInput } = require('../parseInput');

function solve1(map) {
  const lowCoords = [];
  let totalRisk = 0;
  const width = map.length;
  const height = map[0].length;
  for (let i=0; i<width; i++) {
    for (let j=0; j<height; j++) {
      const curr = map[i][j];
      const neighbors = [];
      if (j !== height-1) neighbors.push(map[i][j+1]);
      if (j !== 0) neighbors.push(map[i][j-1]);
      if (i !== width-1) neighbors.push(map[i+1][j]);
      if (i !== 0) neighbors.push(map[i-1][j]);
      if (curr < Math.min(...neighbors)) {
        totalRisk += curr+1;
      }
    }
  }
  console.log(totalRisk);

  return;
}

function solve2(map) {
  const checkedCells = [];
  const basinSizes = [];
  const width = map.length;
  const height = map[0].length;
  
  for (let i=0; i<width; i++) {
    checkedCells[i] = checkedCells[i] || [];
    for (let j=0; j<height; j++) {
      if (checkedCells[i][j] === 1) continue;
      if (map[i][j] === 9) continue;
     
      let basinSize = 0;
      let basin = [[i,j]]; 

      while (basin.length) {
        let curr = basin.pop();
        let x=curr[0];
        let y=curr[1];
        checkedCells[x] = checkedCells[x] || [];
        if (checkedCells[x][y] === 1 || map[x][y] === 9) continue;
        checkedCells[x][y] = 1;
        basinSize++;
        
        if (x+1 < width) basin.push([x+1,y]);
        if (x-1 >= 0) basin.push([x-1,y]);
        if (y+1 < height) basin.push([x,y+1]);
        if (y-1 >= 0) basin.push([x,y-1]);
      }
      basinSizes.push(basinSize);
    }
  }
  const sortedBasins = basinSizes.sort((a, b) => b - a);
  console.log(sortedBasins[0] * sortedBasins[1] * sortedBasins[2]);

  return;
}

const data = parseInput('./9/input.txt');
const map = [];
data.forEach((row, i) => {
  map[i] = [];
  row.split('').forEach(spot => map[i].push(parseInt(spot)));
})
// const solution1 = solve1(map);
const solution2 = solve2(map);

module.exports = {
	// solution1,
  solution2,
};
