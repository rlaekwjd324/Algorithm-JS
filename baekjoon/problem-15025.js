let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let left = parseInt(input[0]);
let right = parseInt(input[1]);

if(left === 0 && right === 0) {
    console.log('Not a moose');
    return;
} 
if(left === right) {
    console.log('Even ' + left * 2);
    return;
} 
console.log('Odd ' + (left > right ? left * 2 : right * 2));
