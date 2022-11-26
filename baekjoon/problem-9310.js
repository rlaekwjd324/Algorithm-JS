let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let index = 0;
let answer = '';
while (input[index] !== '0') {
    let n = parseInt(input[index]);
    index++;
    let line = input[index].split(' ').map(function (params) {
        return parseInt(params);
    })
    let sum = 0;
    if (line[2] - line[1] === line[1] - line[0]) {
        sum = n * (2 * line[0] + (n - 1) * (line[1] - line[0])) / 2;
    } else {
        let r = parseInt(line[1] / line[0]);
        sum = line[0] * (Math.pow(r, n) - 1) / (r - 1);
    }
    answer += (sum + '\n');
    index++;
}
console.log(answer);