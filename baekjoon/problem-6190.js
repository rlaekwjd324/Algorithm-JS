let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let n = parseInt(input[0]);
let score = 0;
while (n > 1) {
    if (n % 2 === 0) {
        n = n / 2;
    } else {
        n = n * 3 + 1;
    }
    score++;
}
console.log(score);