let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let index = 1;
let answer = parseInt(input[0]);
while (input[index] !== '=') {
    answer = calculate(answer, input[index++], parseInt(input[index++]));
}
console.log(answer);

function calculate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return parseInt(firstNumber / secondNumber);
    }
    return;
}