let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let k = parseInt(input[0]);
let word = input[1];
let answer = '';
for (let i = 0; i < word.length; i++) {
    if (i % k === 0) {
        answer += word.charAt(i);
    }
}
console.log(answer);