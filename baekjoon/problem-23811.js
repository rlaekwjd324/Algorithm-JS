let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
// let input = fs.readFileSync('test.txt').toString();

let count = input;

for (let i = 0; i < Number(count) * 5; i++) {
    if ((count * 3 > i && count * 2 <= i) || i < count || i >= count * 4) {
        console.log('@'.repeat(count * 5));
    } else {
        console.log('@'.repeat(count));
    }
}