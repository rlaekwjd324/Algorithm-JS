let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');

let number = parseInt(input[0]);
let p = number * 5 - 400;
console.log(p);
console.log(p >= 100 ? (p === 100 ? '0' : '-1') : '1');