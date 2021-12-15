const { parseInput } = require('../parseInput');
const data = parseInput('./14/input.txt');

function solve1(data, steps) {
  let p = 'NNCB'
  const rules = {};

  data.forEach(rule => {
    let parts = rule.split(' -> ');
    rules[parts[0]] = parts[0][0] + parts[1];
  });

  for (let s = 0; s < steps; s++) {
    let nextP = '';
  
    for (let i = 0; i < p.length-1; i++) {
      let subString = p.substring(i, i+2);
      nextP += rules[subString];
    }
    nextP += p[p.length-1];
    console.log(p);
    p = nextP;
  }

  let counts = [];
  p.split('').forEach(l => {
    counts[l.charCodeAt(0)] = counts[l.charCodeAt(0)] || 0;
    counts[l.charCodeAt(0)]++;
  });
  counts = counts.filter(n => n);
  console.log(Math.max(...counts) - Math.min(...counts));
}


const solution1 = solve1(data, 5);

module.exports = {
	solution1,
};
