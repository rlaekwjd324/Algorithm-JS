let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let password = 'ILOVEYONSEI';
let start = input[0];
let sum = 0;
for (let i = 0; i < password.length; i++) {
    sum += (Math.abs(start.charCodeAt(0) - password.charCodeAt(i)));
    start = password.charAt(i);
}
console.log(sum);