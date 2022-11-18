let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('test.txt').toString().trim().split(' ');
let n = parseInt(input[0]);
let k = parseInt(input[1]);
let count = 0;
let answer = '';
for (let i = 1; i <= n; i++) {
    if ((i % 10 !== k % 10) && (i % 10 !== (2 * k) % 10)) {
        answer += (i + ' ');
        count++;
    }
}
console.log(count + '\n' + answer);