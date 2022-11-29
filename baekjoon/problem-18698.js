let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let n = parseInt(input[0]);
let answer = '';
for (let i = 1; i <= n; i++) {
    let count = 0;
    let line = input[i].split('');
    for (let j = 0; j < line.length; j++) {
        if (line[j] === 'D') {
            break;
        }
        count++;
    }
    answer += (count + '\n');
}
console.log(answer);