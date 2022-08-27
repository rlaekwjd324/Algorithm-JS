let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('test.txt').toString().trim().split(' ');
let firstCalculatedNumber = calculate(calculate(parseInt(input[0]), input[1], parseInt(input[2])), input[3], parseInt(input[4]));
let secondCalculatedNumber = calculate(parseInt(input[0]), input[1], calculate(parseInt(input[2]), input[3], parseInt(input[4])));
console.log(firstCalculatedNumber < secondCalculatedNumber ?
    firstCalculatedNumber + '\n' + secondCalculatedNumber
    : secondCalculatedNumber + '\n' + firstCalculatedNumber);

function calculate(first, calc, second) {
    switch (calc) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '/':
            return parseInt(first / second);
        case '*':
            return first * second;
    }
}