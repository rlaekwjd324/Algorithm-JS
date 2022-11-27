let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let n = parseInt(input[0]);
let minimum = 1000000000;
for (let i = 1; i <= n; i++) {
    let line = input[i].split(' ').map(function (v) { return parseInt(v); });
    minimum = Math.min(minimum, parseInt(line[1] / line[0]));
}
console.log(minimum);