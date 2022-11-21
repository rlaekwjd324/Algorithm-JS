let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let n = parseInt(input[0]);
let a = 0;
let b = 0;
for (let i = 1; i <= n; i++) {
    let cards = input[i].split(' ').map(function (value) { return parseInt(value); });
    if (cards[0] > cards[1]) {
        a += (cards[0] + cards[1]);
    } else if (cards[0] === cards[1]) {
        a += cards[0];
        b += cards[1];
    } else {
        b += (cards[0] + cards[1]);
    }
}
console.log(a + ' ' + b);