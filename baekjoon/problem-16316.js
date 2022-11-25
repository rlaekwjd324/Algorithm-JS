let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let line = input[1].split(' ');
if (line.length.toString() !== input[0]) {
    console.log('something is fishy');
    return;
}
for (let i = 0; i < line.length; i++) {
    if (line[i] !== (i + 1).toString() && line[i] !== 'mumble') {
        console.log('something is fishy');
        return;
    }
}
console.log('makes sense');