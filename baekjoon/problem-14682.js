let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');

var sum = 0;
for (let i = 0; i <= parseInt(input[1]); i++) {
    sum += (parseInt(input[0]) * Math.pow(10, i));
}
console.log(sum);