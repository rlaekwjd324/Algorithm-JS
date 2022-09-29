let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let max = input[1];
for (let i = 2; i <= parseInt(input[0]); i++) {
    if (max < parseInt(input[i])) {
        console.log('N');
        return;
    }
}
console.log('S');