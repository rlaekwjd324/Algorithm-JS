let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');

let count = input[0];

for (let i = 1; i <= count; i++) {
    let str = input[2 * i - 1];
    let cryptoquote = input[2 * i];
    var answer = '';
    for (let j = 0; j < str.length; j++) {
        if (str[j] === ' ') {
            answer += ' ';
        } else {
            answer += cryptoquote[parseInt(str.charCodeAt(j)) - 65];
        }
    }
    console.log(answer);
}