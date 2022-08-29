let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('test.txt').toString().trim().split('\n');
for (let i = 0; i < input.length / 2; i++) {
    if (input[i * 2 + 1] === undefined) {
        return;
    }
    let array = input[i * 2 + 1].toString().trim().split(' ');
    var maryWinCount = 0;
    var johnWinCount = 0;
    for (let j = 0; j < Number(input[i * 2]); j++) {
        if (array[j] === '0') {
            maryWinCount++;
        } else if (array[j] === '1') {
            johnWinCount++;
        }
    }
    console.log('Mary won ' + maryWinCount + ' times and John won ' + johnWinCount + ' times');
}