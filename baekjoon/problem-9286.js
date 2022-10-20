let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let n = parseInt(input[0]);
let index = 1;
let answer = '';
for (let i = 1; i <= n; i++) {
    let m = parseInt(input[index]);
    answer += ('Case ' + i + ':\n');
    for (let j = 0; j < m; j++) {
        index++;
        if (input[index] === '6') {
            continue;
        }
        answer += ((parseInt(input[index]) + 1) + '\n');
    }
    index++;
}
console.log(answer);