let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(function (value) { return parseInt(value); });
let input = fs.readFileSync('test.txt').toString().trim().split(' ').map(function (value) { return parseInt(value); });
let digitCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 1; i <= input[0]; i++) {
    let word = i.toString().split('');
    for (let j = 0; j < word.length; j++) {
        digitCount[parseInt(word[j])]++;
    }
}
console.log(digitCount[input[1]]);