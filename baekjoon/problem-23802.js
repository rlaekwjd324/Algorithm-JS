let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');

let number = parseInt(input[0]);

for (let i = 0; i < number * 5; i++) {
    var line = '';
    if (i < number) {
        line += '@'.repeat(number * 5);
    } else {
        line += '@'.repeat(number);
    }
    console.log(line);
}