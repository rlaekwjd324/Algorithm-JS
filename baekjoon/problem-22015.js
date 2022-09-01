let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split(' ').map(function (line) {
    return parseInt(line);
});
while (input[0] > 0 || input[1] > 0 || input[2] > 0) {
    for (let i = 0; i < 3; i++) {
        input[i]--;
    }
}
console.log(Math.abs(input[0] + input[1] + input[2]));