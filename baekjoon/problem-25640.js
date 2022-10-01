let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let mbti = input[0];
var count = 0;
for (let i = 0; i < parseInt(input[1]); i++) {
    if (input[i + 2] === mbti) {
        count++;
    }
}
console.log(count);