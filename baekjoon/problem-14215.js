let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('test.txt').toString().trim().split(' ').map(function (line) {
    return parseInt(line);
});
input.sort(function (a, b) {
    return a - b;
});
var answer = 0;
answer = (input[0] + input[1] > input[2] ? (input[0] + input[1] + input[2]) : ((input[0] + input[1]) * 2 - 1));
console.log(answer);