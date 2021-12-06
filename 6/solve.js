const { parseInput } = require('../parseInput');

function solve(fish) {
  for (let i=0; i<128; i++) {
    fish.forEach((f, i) => {
      if(f) {
        fish[i] = f-1;
      } else {
        fish[i] = 6;
        fish.push(8);
      } 
    });
  }
  console.log(fish.length);
}

function solve2(fish) {
  const memo = [];
  for (let j=0; j<=8; j++) {
    let protoFish = [j];

    for (let i=0; i<128; i++) {
      protoFish.forEach((f, i) => {
        if(f) {
          protoFish[i] = f-1;
        } else {
          protoFish[i] = 6;
          protoFish.push(8);
        } 
      });
    }
    memo[j] = protoFish.length;
  }

  for (let i=0; i<128; i++) {
    fish.forEach((f, i) => {
      if(f) {
        fish[i] = f-1;
      } else {
        fish[i] = 6;
        fish.push(8);
      } 
    });
  }

  console.log(memo);
  let total = 0;
  fish.forEach(f => {
    total+=memo[f];
  });
  console.log(total);
}

const data = parseInput('./6/input.txt');
const fish = [];
data[0].split(',').forEach(el => fish.push(parseInt(el)));
const solution = solve2(fish);

module.exports = {
	solution,
};
