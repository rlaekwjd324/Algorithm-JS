let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let max = 0;
for (let i = 1; i <= parseInt(input[0]); i++) {
    let line = input[i].split(' ').map(function (value) { return parseInt(value) });
    max = Math.max(max, (line[0] === line[1] + line[2] ? line[0] * (line[1] + line[2]) * 2 : line[0] * (line[1] + line[2])));
}
console.log(max);
