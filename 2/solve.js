const { parseInput } = require('../parseInput');

function solve1(data) {
  let horiz = 0;
  let depth = 0;
  data.forEach((el) => {
    let dir = el.split(' ')[0];
    let qty = parseInt(el.split(' ')[1]);
    if (dir === 'forward') horiz+= qty;
    else if (dir === 'down') depth+= qty;
    else if (dir === 'up') depth-= qty;
  });
  return depth*horiz;
}

function solve2(data) {
  let horiz = 0;
  let depth = 0;
  let aim = 0;

  data.forEach((el) => {
    let dir = el.split(' ')[0];
    let qty = parseInt(el.split(' ')[1]);
    if (dir === 'forward') {
      horiz+= qty;
      depth+= (aim * qty);
    }
    else if (dir === 'down') aim+= qty;
    else if (dir === 'up') aim-= qty;
  });
  return depth*horiz;
}

const data = parseInput('./2/input.txt');
const solution1 = solve1(data);
const solution2 = solve2(data);

module.exports = {
	solution1,
  solution2,
};
