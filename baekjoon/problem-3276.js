let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let N = parseInt(input[0]);
let divNumber = parseInt(Math.sqrt(N));
N === divNumber * divNumber ? console.log(divNumber + ' ' + divNumber) :
    (N <= (divNumber + 1) * divNumber ? console.log(divNumber + ' ' + (divNumber + 1)) : console.log((divNumber + 1) + ' ' + (divNumber + 1)));