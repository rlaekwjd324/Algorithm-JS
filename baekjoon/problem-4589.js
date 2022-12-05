let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let n = parseInt(input[0]);
let answer = 'Gnomes:\n';
for (let i = 1; i <= n; i++) {
    let gnomes = input[i].split(' ').map(function (v) { return parseInt(v); });
    if ((gnomes[0] - gnomes[1] > 0) === (gnomes[1] - gnomes[2] > 0)) {
        answer += 'Ordered\n';
        continue;
    }
    answer += 'Unordered\n';
}
console.log(answer);