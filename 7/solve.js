const { parseInput } = require('../parseInput');

const fuel = [0];
for (let i=1; i<1500; i++){
  fuel[i] = fuel[i-1] + i;
}

function solve(data) {
  let num = 99999999999999999;
  let index = 0;
  for (let i = 0; i < 2000; i++) {
    let dist = getCost(data, i);
    if (dist < num) {
      num = dist;
      index = i;
    }
  }
  console.log(index, num);
  return;
}

function getCost(crabs, num) {
    var total = 0;

    crabs.forEach(function(crab) {
        total += fuel[Math.abs(crab-num)];
    });

    return total;
}

let data = parseInput('./7/input.txt');
data = data[0].split(',');
data.forEach((el,i) => data[i] = parseInt(el));
const solution = solve(data);


module.exports = {
	solution
};
