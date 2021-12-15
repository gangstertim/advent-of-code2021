const { parseInput } = require('../parseInput');
const d = parseInput('./15/input.txt');

const solution1 = solve1(d);
const solution2 = solve2(d);

function buildMap(data) {
  const map = [];
  data.forEach((row, i) => {
    map.push([]);
    row.split('').forEach(el => map[i].push(parseInt(el)));
  });
  return map;
}

function buildBigMap(map) {
  const bigMap = [];
  const length = map.length;
  for (let i = 0; i < length*5; i++) {
    bigMap[i] = [];
    for (let j = 0; j < length*5; j++) {
      bigMap[i][j] = map[i%length][j%length] + Math.floor(i/length) + Math.floor(j/length);
      bigMap[i][j] = (bigMap[i][j] > 9) ? bigMap[i][j]%9 : bigMap[i][j];
    }
  }
  return bigMap;
}

function solve1(data) {
  const m = buildMap(data);
  let risk = shortestPath(0,0,m,[]);
  console.log(risk - m[0][0]);
}

function solve2(data) {
  const m = buildMap(data);
  const bigMap = buildBigMap(m);
  let risk = shortestPath(0,0,bigMap,[]);
  console.log(risk - bigMap[0][0]);
}

function shortestPath(i,j,m,memo) { 
  const curr = m[i][j];
  memo[i] = memo[i] || [];
  
  if (memo[i][j]) return memo[i][j];
  if (i === m.length-1 && j === m.length-1) return curr; 

  if (i === m.length-1) {
    memo[i][j] = curr + shortestPath(i, j+1,m,memo);
  }
  else if (j === m.length-1) {
    memo[i][j] = curr + shortestPath(i+1, j,m,memo);
  } else {
    memo[i][j] = curr + Math.min(shortestPath(i+1,j,m,memo), shortestPath(i, j+1,m,memo));
  }

  return memo[i][j];
}

module.exports = {
	solution1,
  solution2,
};
