let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');

let number = parseInt(input[0]);
let divNumber = '';
while (number >= 1) {
    divNumber = parseInt(number % 2) + divNumber;
    number = number / 2;
}
var answer = '';
for (let i = 0; i < divNumber.length; i++) {
    if (divNumber.charAt(divNumber.length - i - 1) === '1') {
        answer += (i + ' ');
    }
}
console.log(answer);