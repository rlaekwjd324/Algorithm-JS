let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('test.txt').toString().trim().split(' ');
let plusNumber = parseInt(input[0]) + parseInt(input[1]);
let minusNumber = parseInt(input[0]) - parseInt(input[1]);
console.log(plusNumber > minusNumber ? plusNumber : minusNumber);
console.log(plusNumber > minusNumber ? minusNumber : plusNumber);