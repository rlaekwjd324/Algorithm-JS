let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let answer = '';
for (let i = 1; i <= parseInt(input[0]); i++) {
    let line = input[2 * i].split(' ').map(function (v) { return parseInt(v); });
    let sum = 0;
    for (let j = 0; j < line.length; j++) {
        sum += parseInt(line[j]);
    }
    if (sum < 0) {
        answer += 'Left';
    } else if (sum > 0) {
        answer += 'Right';
    } else {
        answer += 'Equilibrium';
    }
    answer += '\n';
}
console.log(answer);