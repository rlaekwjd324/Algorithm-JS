let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let A = parseInt(input[0].split(' ')[0]);
let B = parseInt(input[0].split(' ')[1]);
let m = parseInt(input[1]);
let number = input[2].split(' ').map(function (value) {
    return parseInt(value);
});
let realNumber = 0;
for (let i = 0; i < m; i++) {
    realNumber += (Math.pow(A, i) * number[number.length - i - 1]);
}
let answerNumber = '';
while (realNumber > 0) {
    answerNumber = (realNumber % B) + ' ' + answerNumber;
    realNumber = parseInt(realNumber / B);
}
console.log(answerNumber);