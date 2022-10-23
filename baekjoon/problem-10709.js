let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let answer = '';
let h = parseInt(input[0].split(' ')[0]);
let w = parseInt(input[0].split(' ')[1]);
for (let i = 1; i <= h; i++) {
    let skyLine = input[i].split('');
    for (let j = 0; j < w; j++) {
        for (let z = j; z >= 0; z--) {
            if (skyLine[z] === 'c') {
                answer += ((j - z) + ' ');
                break;
            }
            if (z === 0) {
                answer += ('-1 ');
            }
        }
    }
    answer += '\n';
}
console.log(answer);