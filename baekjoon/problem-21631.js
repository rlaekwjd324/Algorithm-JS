let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let line = input[0].split(' ').map( function (v) { return BigInt(v); });
console.log(String(line[1] - 1n <= line[0] ? line[1] : line[0] + 1n));