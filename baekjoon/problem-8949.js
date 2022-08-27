// let fs = require('fs');
// // let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// let input = fs.readFileSync('test.txt').toString().split(' ').map(function (e) {
//     return e.split('').map(function (e) {
//         return parseInt(e);
//     });
// });
// let input =
//     require('fs').readFileSync('test.txt').toString().trim().split(' ').map(function (e) {
//         return e.split('').map(function (e) {
//             return parseInt(e);
//         });
//     });
// var sum = '';
// while (input[0].length > 0 || input[1].length > 0) {
//     var a = input[0].pop();
//     var b = input[1].pop();
//     a = (a === undefined ? 0 : a);
//     b = (b === undefined ? 0 : b);
//     sum = (a + b) + sum;
// }
// console.log(sum);

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('test.txt').toString().trim().split(' ');

let firstNumber = input[0];
let secondNumber = input[1];
firstNumber = '0'.repeat(Math.max(firstNumber.length, secondNumber.length) - firstNumber.length) + firstNumber;
secondNumber = '0'.repeat(Math.max(firstNumber.length, secondNumber.length) - secondNumber.length) + secondNumber;
var sum = '';

for (let i = 0; i < firstNumber.length; i++) {
    sum += (parseInt(firstNumber[i]) + parseInt(secondNumber[i]));
}
console.log(sum);