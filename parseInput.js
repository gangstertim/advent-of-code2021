const path = require('path');
const fs = require('fs');

function parseInput(name) {
  return fs
	.readFileSync(path.join(__dirname, name))
	.toString()
	.trim()
	.split('\n');
}

module.exports = {
	parseInput,
};