let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let answer = '';
for (let i = 1; i <= parseInt(input[0]); i++) {
    let line = input[i].split(' ').map(function (line) {
        return parseInt(line);
    });
    answer += ('Case ' + i + ': ' + (line[0] - 1));
    for (let j = 1; j < line.length - 1; j++) {
        answer += (' ' + (line[j] * (line[0] - j + 1)));
    }
    answer += '\n';
}
console.log(answer);