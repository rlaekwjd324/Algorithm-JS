let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let t = parseInt(input[0]);
let index = 0;
let answer = '';
for (let i = 0; i < t; i++) {
    index++;
    let n = parseInt(input[index]);
    for (let j = 0; j < n; j++) {
        index++;
        let line = input[index].split(' ').map(function (v) { return parseInt(v); });
        answer += ((line[0] + line[1]) + ' ' + line[0] * line[1] + '\n');
    }
}
console.log(answer);