const { parseInput } = require('../parseInput');

const data = parseInput('./13/input.txt');
const folds = [];
let dots = [];
let maxX = 0;
let maxY = 0;
data.forEach(e => {
  let arr = e.split(' ');
  if (arr.length > 1) {
    folds.push(arr[2]);
  } else if (arr[0]) {
    let dot = arr[0].split(',').map(e => parseInt(e));
    if (dot[0] > maxX) maxX = dot[0];
    if (dot[1] > maxY) maxY = dot[1];
    dots.push(dot);
  }
});

folds.forEach(f => {
  dots = fold(dots, f.split('=')[0], f.split('=')[1]);
});


function fold(dots, axis = 'y', line = 7) {
  
  const foldCoord = (axis === 'x') ? 0 : 1;
  const other = (axis === 'x') ? 1 : 0;
  // fold along y = 7
  const freshDots = [];
  const freshDotsString = [];

  dots.forEach(dot => {
    d = []
    if (dot[foldCoord] > line) {
      d[foldCoord] = line - (dot[foldCoord] - line);
      d[other] = dot[other];
    } else {
      d[0] = dot[0];
      d[1] = dot[1];
    }
    if (freshDotsString.indexOf(d.toString()) === -1) {
      freshDotsString.push(d.toString())
      freshDots.push(d);
    }
  });
  
  return freshDots;
}

let a = [];
for(let x = 0; x < 10; x++) {
  let row = [];
  for(let y = 0; y < 40; y++) {
    row.push('.')
  }
  a.push(row);
}

dots.forEach(dot => {
  console.log(dot[0], dot[1]);
  a[dot[1]][dot[0]] = '#';
});
a.forEach(row => {
  console.log(row.join(''));
});

module.exports = {
	// solution1,
  // solution2,
};
