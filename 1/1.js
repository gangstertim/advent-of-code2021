const { input } = require('./input');

let solution = 0;
  
for(let i=1; i<input.length; i++){
  let curr=input[i];
  let prev=input[i-1];
  if (curr > prev) solution++;
}

module.exports = {
	solution,
};
