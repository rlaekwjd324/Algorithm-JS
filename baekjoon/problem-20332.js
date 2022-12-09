let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let line = input[1].split(' ').map( function (v) { return parseInt(v); });
let sum = 0;
for (let i = 0; i < parseInt(input[0]); i++) {
    sum += line[i];
}
console.log(sum % 3 === 0 ? 'yes' : 'no');