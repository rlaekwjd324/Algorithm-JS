let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');

var number = parseInt(input[0]);
var answer = '';
while (number !== 1) {
    answer += number + ' ';
    if (number % 2 === 0) {
        number = number / 2;
    } else {
        number = number * 3 + 1;
    }
}
console.log(answer + 1);