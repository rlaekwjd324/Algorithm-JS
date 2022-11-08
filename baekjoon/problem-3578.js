let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let number = '';
let n = parseInt(input[0]);
if (input[0] === '0') {
    console.log(1);
} else if (input[0] === '1') {
    console.log(0);
} else {
    number = '8'.repeat(n / 2);
    if (n % 2 === 1) {
        number = '4' + number;
    }
}
console.log(number);