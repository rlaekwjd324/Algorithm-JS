let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// let input = fs.readFileSync('test.txt').toString().split(' ');
var count = new Array(0, 0, 0);

input.forEach(value => {
    count[Number(value) - 1]++;
});

console.log(5000 - count[0] * 500 - count[1] * 800 - count[2] * 1000);