let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let n1 = parseInt(input[0]);
let n2 = parseInt(input[1]);
let answer = 0;
if (n1 > n2) {
    answer = n2 - n1 <= -180 ? n2 - n1 + 360 : n2 - n1;
} else {
    answer = n2 - n1 > 180 ? n2 - n1 - 360 : n2 - n1;
}
console.log(answer);