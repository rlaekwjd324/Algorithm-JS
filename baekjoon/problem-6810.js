let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let numbers = [9, 7, 8, 0, 9, 2, 1, 4, 1, 8, parseInt(input[0]), parseInt(input[1]), parseInt(input[2])];
var sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += (numbers[i] * (i % 2 === 0 ? 1 : 3));
}
console.log('The 1-3-sum is ' + sum);
