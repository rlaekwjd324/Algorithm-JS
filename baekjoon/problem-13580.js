let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('test.txt').toString().trim().split(' ');

var years = [parseInt(input[0]), parseInt(input[1]), parseInt(input[2])];
years.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
});

if (years[0] === years[1] || years[1] === years[2]) {
    console.log('S');
    return;
}
if (years[0] + years[1] === years[2]) {
    console.log('S');
    return;
}
console.log('N');
