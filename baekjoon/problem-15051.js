let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');

var minTime = 1000000;

for (let i = 1; i <= 3; i++) {
    var time = 0;
    time += parseInt(input[0]) * Math.abs(i - 1) * 2;
    time += parseInt(input[1]) * Math.abs(i - 2) * 2;
    time += parseInt(input[2]) * Math.abs(i - 3) * 2;
    minTime = Math.min(minTime, time);
}
console.log(minTime);