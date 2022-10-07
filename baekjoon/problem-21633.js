let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let num = parseInt(input[0]) * 0.01 + 25;
const temp = num * 100;
const temp2 = Math.floor(temp);
const result = (temp2 / 100).toFixed(2);
console.log(result > 2000 ? '2000.00' : (result >= 100 ? result : '100.00'));