let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('test.txt').toString().split('\n');

for (let i = 0; i < input.length; i++) {
    if (input[i] === '0') {
        return;
    }
    console.log('Case ' + (i + 1) + ': Sorting... done!');
}