let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(function (value) {return parseInt(value);});
let input = fs.readFileSync('test.txt').toString().trim().split(' ').map(function (value) {
    return parseInt(value);
});
console.log(input[2] < input[1] && input[2] >= input[0] ? 1 : 0);