let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let s = input[0];
console.log('h' + s.substring(1, s.length - 1).repeat(2) + 'y');