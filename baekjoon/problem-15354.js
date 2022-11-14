const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let prevColor = '';
    let count = 0;
    for (let i = 1; i <= parseInt(input[0]); i++) {
        let color = input[i];
        if (color !== prevColor) {
            count++;
            prevColor = color;
        }
    }
    console.log(count + 1);
    process.exit();
});