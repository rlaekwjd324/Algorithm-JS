let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let n = parseInt(input[0]);
let index = 1;
let answer = '';
for (let i = 1; i <= input[n]; i++) {
    if (parseInt(input[index]) !== i) {
        answer += (i + '\n');
    } else {
        index++;
    }
}
console.log(answer.length === 0 ? 'good job' : answer);