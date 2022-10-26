let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let answer = '';
for (let i = 1; i <= parseInt(input[0]); i++) {
    let line = input[i].split(' ').map(function (value) { return parseInt(value); });
    answer += (line.join(' '));
    (line[0] + line[1] + line[2] === 180) ? (answer += ' Seems OK\n') : (answer += ' Check\n');
}
console.log(answer);