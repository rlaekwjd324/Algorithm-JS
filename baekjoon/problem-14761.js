const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const fizz = input[0];
const buzz = input[1];
const count = input[2];

for (let i = 1; i <= count; i++) {
    var answer = "";
    if (i % fizz === 0) {
        answer = "Fizz";
    }
    if (i % buzz === 0) {
        answer += "Buzz";
    }
    if (answer === "") {
        answer = i;
    }
    console.log(answer);
}