const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    input = input.map((item) => +item);
    solution(input[0], input[1]);
    process.exit();
});

function solution(x, y) {
    var sum = 0;
    for (let i = 0; i <= parseInt(input[1]); i++) {
        sum += (parseInt(input[0]) * Math.pow(10, i));
    }
    console.log(sum);
}