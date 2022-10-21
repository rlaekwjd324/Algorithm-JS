let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let firstLine = input[0].split(' ');
let secondLine = input[1].split(' ');
for (let i = 0; i < 5; i++) {
    if (firstLine[i] === '0' && secondLine[i] === '0') {
        console.log('N');
        return;
    }
    if (firstLine[i] === '1' && secondLine[i] === '1') {
        console.log('N');
        return;
    }
}
console.log('Y');