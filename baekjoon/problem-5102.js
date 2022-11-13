let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let index = 0;
let answer = '';
while (input[index] !== '0 0') {
    let line = input[index].split(' ').map(function (params) {
        return parseInt(params);
    })
    if ((line[0] - line[1]) % 2 === 1 && (line[0] - line[1]) >= 3) {
        answer += parseInt((line[0] - line[1] - 3) / 2);
        answer += ' 1\n';
    } else {
        answer += parseInt((line[0] - line[1]) / 2);
        answer += ' 0\n';
    }
    index++;
}
console.log(answer);