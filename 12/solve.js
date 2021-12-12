const { parseInput } = require('../parseInput');

const data = parseInput('./12/test.txt');
const cave = {};
let paths = 0;

data.forEach(d => {
  const key = d.split('-')[0];
  const val = d.split('-')[1];
  cave[key] = cave[key] || [];
  if (val !== 'start') cave[key].push(val);
  if (key !== 'start' && val !== 'end') {
    cave[val] = cave[val] || [];
    cave[val].push(key);
  }
});

function visitOnce(node = 'start', visited = []) {
  if (node === 'end') {
    paths++;
    return;
  }
  if (visited.indexOf(node) !== -1) return;
  if (node === node.toLowerCase()) {
    visited.push(node);
  }

  cave[node].forEach(next => visitOnce(next, [...visited]));
}

function visitTwice(node = 'start', visited = [], twice = false) {
  if (node === 'end') {
    paths++;
    return;
  }
  if (node === node.toLowerCase() && visited.indexOf(node) !== -1 && twice) return;
  if (node === node.toLowerCase() && visited.indexOf(node) !== -1) twice = true;
  if (node === node.toLowerCase()) {
    visited.push(node);
  }

  cave[node].forEach(next => visitTwice(next, [...visited], twice));
}

// visitOnce();
visitTwice();
console.log(paths);

module.exports = {
	// solution1,
  // solution2,
};
