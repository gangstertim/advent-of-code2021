const { input } = require('./input');

let numIncreases = 0;
  
for(let i=1; i<input.length; i++){
  let curr=input[i];
  let prev=input[i-1];
  if (curr > prev) numIncreases++;
}

console.log(numIncreases);