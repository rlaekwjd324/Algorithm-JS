let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let k = parseInt(input[0]);
let answer = '';
let index = 0;
for (let i = 1; i <= k; i++) {
    index++;
    let line = input[index].split(' ').map(function (value) { return parseInt(value); });
    let n = line[0];
    let s = line[1];
    let d = line[2];
    let sumValue = 0;
    for (let j = 1; j <= n; j++) {
        index++;
        let partLine = input[index].split(' ').map(function (value) { return parseInt(value); });
        let distance = partLine[0];
        let value = partLine[1];
        if (distance <= s * d) {
            sumValue += value;
        }
    }
    answer += ('Data Set ' + i + ':\n' + sumValue + '\n\n');
}
console.log(answer);