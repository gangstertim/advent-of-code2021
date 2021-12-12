const { parseInput } = require('../parseInput');
const openers = ['[','{','<','('];
const closers = [']','}','>',')'];
const score = {
  ')' : 3,
  ']': 57,
  '}': 1197,
  '>': 25137
};
const score2 = [2,3,4,1];

function solve1(data) {
  const illegalChars = [];
  let totalScore = 0;

  data.forEach(line => {
    let opens = []; 
    let closes = [];
    
    for (let i=0; i<line.length; i++) {
      let index = openers.indexOf(line[i]);
      if (index !== -1) {
        opens.push(index);
      } else {
        index = closers.indexOf(line[i]);
        lastOpen = opens.pop();
        if (index !== lastOpen) {
          illegalChars.push(line[i]);
          break;
        }
      }
    }
  });
  illegalChars.forEach(c => totalScore +=  score[c]);
  console.log(totalScore);
}

function solve2(data) {
  const corrections = [];
  const correctionScores = [];

  data.forEach(line => {
    let opens = []; 
    let closes = [];
    let isCorrupt = false;
    
    for (let i=0; i<line.length; i++) {
      let index = openers.indexOf(line[i]);
      if (index !== -1) opens.push(index);
      else {
        index = closers.indexOf(line[i]);
        lastOpen = opens.pop();
        if (index !== lastOpen) {
          isCorrupt = true;
          break;
        }
      }
    }
    if (!isCorrupt) {
      const r = opens.reverse();
      corrections.push(r);
    }
  });

  corrections.forEach(el => {
    let s = 0;
    el.forEach (e => {
      s*=5;
      s+=score2[e];
    });
    correctionScores.push(s);
  });

  correctionScores.sort((a,b) => a-b);
  console.log(correctionScores[(correctionScores.length-1)/2]);
}

const data = parseInput('./10/input.txt');

const solution1 = solve1(data);
const solution2 = solve2(data);

module.exports = {
	solution1,
  solution2,
};
