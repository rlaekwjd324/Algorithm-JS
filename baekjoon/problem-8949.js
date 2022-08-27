let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('test.txt').toString().trim().split(' ');

let firstNumber = input[0];
let secondNumber = input[1];
firstNumber = '0'.repeat(Math.max(firstNumber.length, secondNumber.length) - firstNumber.length) + firstNumber;
secondNumber = '0'.repeat(Math.max(firstNumber.length, secondNumber.length) - secondNumber.length) + secondNumber;
var sum = '';

for (let i = 0; i < firstNumber.length; i++) {
    sum += (parseInt(firstNumber[i]) + parseInt(secondNumber[i]));
}
console.log(sum);