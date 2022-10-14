let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let line = input[1].split('').reverse();
let sCount = 0;
let tCount = 0;
let answer = '';
for (let i = 0; i < parseInt(input[0]); i++) {
    line[i] === 's' ? sCount++ : tCount++;
    if (sCount === tCount) {
        answer = line.join('').substring(0, i + 1);
    }
}
console.log(answer.split('').reverse().join(''));