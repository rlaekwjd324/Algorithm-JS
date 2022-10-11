let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('test.txt').toString().trim().split(' ');
let N = parseInt(input[0]);
let sum = 0;
for (let i = 1; i <= N; i++) {
    sum += (i * i * i);
}
console.log(sum);