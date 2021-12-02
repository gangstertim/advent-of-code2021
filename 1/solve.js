const { parseInput } = require('../parseInput');

function solve1(data) {
  let ans = 0;

  for(let i=1; i<data.length; i++){
    let curr=data[i];
    let prev=data[i-1];
    if (curr > prev) ans++;
  }
  return ans;
}

function solve2(data) {
  let curr, prev = 0;
  let ans = 0;
  for(let i=2; i<data.length; i++){
    curr = parseInt(data[i]) + parseInt(data[i-1]) + parseInt(data[i-2]);
    if (curr > prev) ans++;
    prev = curr;
  }

  return ans;
}

const data = parseInput('./1/input.txt');
const solution1 = solve1(data);
const solution2 = solve2(data);


module.exports = {
	solution1,
  solution2,
};
