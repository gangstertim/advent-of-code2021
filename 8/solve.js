const { parseInput } = require('../parseInput');


function solve1(data) {

  const outputs = [];
  data.forEach(el => {
    outputs.push(el.split(' | ')[1]);
  });
  
  let count = 0;
  outputs.forEach(el => {
    el.split(' ').forEach(num => {
      if ([2, 3, 4, 7].indexOf(num.length) !== -1) count++;
    });
  });
  console.log(count);
  return data;
}

function solve2(data) {
  const sortedData = [];
  const doubledData = [];
  let total = 0;
  data.forEach((datum, i) => {
    sortedData[i] = [];
    datum.split(' ').forEach(el => {
      sortedData[i].push(el.split('').sort().join(''));
    })
  });
  sortedData.forEach(datum => {
    doubledData.push(datum.concat(datum));
  })
  
  doubledData.forEach(datum => {
    const map = {};
    datum.forEach(word => {
      if (map[word]) return;

      if (word.length === 2) map[word] = 1;
      else if (word.length === 3) {
        map[word] = 7;
        map[7] = word;
      }
      else if (word.length === 4) {
        map[4] = word;
        map[word] = 4;
      }
      else if (word.length === 7) map[word] = 8;
      else if (word.length === 5) {
        if(!map[7]) return;
        if (map[7].split('').every(el => word.indexOf(el) !== -1)) map[word] = 3;
        else {
          let matches = 0;
          if (!map[4]) return;
          word.split('').forEach(letter => {
            if (map[4].indexOf(letter) !== -1) matches++;
          });
          if (matches === 3) map[word] = 5;
          else map[word] = 2;
        }
      }
      else if (word.length === 6) {
        if (!map[4] || !map[7]) return;
        // does the word contain all the characters in map[4]?
        if (map[4].split('').every(el => word.indexOf(el) !== -1)) {
          map[word] = 9;
        }
        else if (map[7].split('').every(el => word.indexOf(el) !== -1)) map[word] = 0;
        else map[word] = 6;
      }
    });
    console.log(map);
    let output = ''
    for (let i = 11; i<=14; i++) {
      output += map[datum[i]];
    }
    console.log(total, parseInt(output));
    total += parseInt(output);
  });
  console.log(total);
  return data;
}

const data = parseInput('./8/input.txt');
// const solution1 = solve1(data);
const solution2 = solve2(data);

module.exports = {
	//solution1,
  solution2,
};
