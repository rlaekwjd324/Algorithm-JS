let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let myX = parseInt(input[0].split(' ')[0]);
let myY = parseInt(input[0].split(' ')[1]);
let n = parseInt(input[1]);
let minDistance = 201;
let answer = '';
for (let i = 2; i <= n + 1; i++) {
    let position = input[i].split(' ').map(function (v) { return parseInt(v); });
    if (minDistance > (Math.abs(myX - position[0]) + Math.abs(myY - position[1]))) {
        minDistance = Math.abs(myX - position[0]) + Math.abs(myY - position[1]);
        answer = position[0] + ' ' + position[1];
    }
}
console.log(answer);