let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let w = parseInt(input[0].split(' ')[0]);
let n = parseInt(input[0].split(' ')[1]);
let p = parseInt(input[0].split(' ')[2]);
let actions = input[1].split(' ').map(function (value) { return parseInt(value); })
let count = 0;
for (let i = 0; i < p; i++) {
    if (actions[i] <= n && actions[i] >= w) {
        count++;
    }
}
console.log(count);