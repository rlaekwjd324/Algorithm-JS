let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
var output = '';
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < parseInt(input[i]); j++) {
        output += ('*'.repeat(j + 1) + '\n');
    }
}
console.log(output);
