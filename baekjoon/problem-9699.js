let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let answer = '';
for (let i = 1; i <= parseInt(input[0]); i++) {
    let line = input[i].split(' ').map(function (value) {
        return parseInt(value);
    });
    let max = 0;
    for (let j = 0; j < 5; j++) {
        max = Math.max(max, line[j]);
    }
    answer += ('Case #' + i + ': ' + max + '\n');
}
console.log(answer);