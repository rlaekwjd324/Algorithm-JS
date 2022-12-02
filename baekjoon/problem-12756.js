let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let aPlayer = input[0].split(' ').map(function (v) { return parseInt(v); });
let bPlayer = input[1].split(' ').map(function (v) { return parseInt(v); });
while (true) {
    aPlayer[1] -= bPlayer[0];
    bPlayer[1] -= aPlayer[0];
    if (aPlayer[1] <= 0 && bPlayer[1] <= 0) {
        console.log('DRAW');
        return;
    }
    if (aPlayer[1] <= 0) {
        console.log('PLAYER B');
        return;
    }
    if (bPlayer[1] <= 0) {
        console.log('PLAYER A');
        return;
    }
}