let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let index = 0;
let answer = '';
while (input[index] !== '0 0 0') {
    let line = input[index].split(' ').map(function (v) { return parseInt(v); });
    // 넓이 = 길이 * 너비
    if (line[0] === 0) {
        line[0] = line[2] / line[1];
    }
    if (line[1] === 0) {
        line[1] = line[2] / line[0];
    }
    if (line[2] === 0) {
        line[2] = line[0] * line[1];
    }
    answer += (line.join(' ') + '\n');
    index++;
}
console.log(answer);