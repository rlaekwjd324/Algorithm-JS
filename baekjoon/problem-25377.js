let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');

var minTime = 10000;
for (let i = 1; i <= parseInt(input[0]); i++) {
    let line = input[i].trim().split(' ');
    minTime = Math.min(minTime, parseInt(line[1]) >= parseInt(line[0]) ? parseInt(line[1]) : minTime);
}
console.log(minTime === 10000 ? -1 : minTime);