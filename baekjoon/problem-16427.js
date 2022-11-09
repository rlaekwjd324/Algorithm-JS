let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let line = input[0].split(' ');
let s = parseInt(line[1]);
line = input[1].split(' ').map(function (value) {
    return parseInt(value);
});
line.sort(function (a, b) {
    return b - a;
})
let number = line[0] * s / 1000;
console.log(Math.ceil(number));