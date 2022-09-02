let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('test.txt').toString().trim().split('\n');

let N = parseInt(input[0]);
let S = input[1];
const array = ['a', 'e', 'i', 'o', 'u'];
var count = 0;
for (let i = 0; i < N; i++) {
    if (array.includes(S.charAt(i))) {
        count++;
    }
}
console.log(count);