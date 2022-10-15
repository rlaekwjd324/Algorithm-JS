let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let N = parseInt(input[0]);
let answer = '';
for (let i = 1; i <= N; i++) {
    answer += (parseInt(input[i]) % 2 === 0 ? input[i] + ' is even\n' : input[i] + ' is odd\n');
}
console.log(answer);