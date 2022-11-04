let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(function (v) { return parseInt(v); });
let input = fs.readFileSync('test.txt').toString().trim().split(' ').map(function (v) { return parseInt(v); });
input.sort(function (a, b) { return a - b; });
if (input[0] + input[1] === input[2]) {
    console.log(1);
} else if (input[0] * input[1] === input[2]) {
    console.log(2);
} else {
    console.log(3);
}