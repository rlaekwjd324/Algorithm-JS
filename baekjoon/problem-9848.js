let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let line = input[0].split(' ').map(function (v) { return parseInt(v); });
let preRecord = 0;
let count = 0;
for (let i = 1; i <= line[0]; i++) {
    if (preRecord - parseInt(input[i]) >= line[1]) {
        count++;
    }
    preRecord = parseInt(input[i]);
}
console.log(count);