let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('test.txt').toString().trim().split(' ');
console.log(parseInt(Number(input[0]) - Number(input[1])));