const { parseInput } = require('../parseInput');

function solve1(data) {
  const gamma = [];
  const epsilon = [];

  const numInputs = data.length;

  data.forEach(function(el) {
    for (let i=0; i<el.length; i++) {
      gamma[i] = (gamma[i] || 0) + parseInt(el[i]);
    }
  });
  
  gamma.forEach(function(el, i) {
    let bit = Math.round(el/numInputs);
    gamma[i] = bit;
    epsilon[i] = bit ? 0 : 1;
  });

  return parseInt(gamma.join(''),2) * parseInt(epsilon.join(''), 2);
}

function getDominantBit(input, i) {
  let ones = 0;
  let zeroes = 0;
  input.forEach(function(el) {
    if (parseInt(el[i]) == '1') ones++;
    else zeroes++;
  });
  return ones >= zeroes ? 1 : 0;
}

function getOxy(data) {
  let oxy = data;
  let i = 0;

  for (let i = 0; oxy.length > 1; i++) {
    let dominantBit = getDominantBit(oxy, i);
    oxy = oxy.filter(el => el[i] == dominantBit)
    console.log(oxy);
  }
  return oxy[0];
}

function getCo2(data) {
  let co2 = data;
  let i = 0;

  for (let i = 0; co2.length > 1; i++) {
    let dominantBit = getDominantBit(co2, i);
    co2 = co2.filter(el => el[i] != dominantBit)
  }
  return co2[0];
}

function solve2(data) {
  const oxy = getOxy(data);
  const co2 = getCo2(data);
  return parseInt(oxy, 2) * parseInt(co2, 2);
}

const data = parseInput('./3/input.txt');
const solution1 = solve1(data);
const solution2 = solve2(data);

module.exports = {
	solution1,
  solution2,
};
