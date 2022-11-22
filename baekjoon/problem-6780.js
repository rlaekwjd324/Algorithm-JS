let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(function (value) { return parseInt(value); });
let input = fs.readFileSync('test.txt').toString().trim().split('\n').map(function (value) { return parseInt(value); });
let first = input[0];
let second = input[1];
let count = 2;
while (first >= second) {
    let temp = second;
    second = first - second;
    first = temp;
    count++;
}
console.log(count);