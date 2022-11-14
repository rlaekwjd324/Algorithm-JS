let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let n = parseInt(input[0]);
let answer = '';
for (let i = 1; i <= n * 5; i++) {
    if (i <= n || (i > n * 2 && i <= n * 3)) {
        answer += '@'.repeat(5 * n);
    } else {
        answer += '@'.repeat(n);
    }
    answer += '\n';
}
console.log(answer);