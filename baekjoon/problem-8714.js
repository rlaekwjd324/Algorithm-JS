let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let line = input[1].split(' ').map(function (value) { return parseInt(value); });
let frontCoinCount = 0;
let backCoinCount = 0;
for (let i = 0; i < parseInt(input[0]); i++) {
    line[i] === 0 ? frontCoinCount++ : backCoinCount++;
}
console.log(frontCoinCount > backCoinCount ? backCoinCount : frontCoinCount);