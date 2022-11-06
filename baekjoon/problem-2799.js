let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let m = parseInt(input[0].split(' ')[0]);
let n = parseInt(input[0].split(' ')[1]);
let windowCounts = [0, 0, 0, 0, 0];
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if (input[i * 5 + 2].charAt(j * 5 + 1) === '.') {
            windowCounts[0]++;
        } else if (input[i * 5 + 3].charAt(j * 5 + 1) === '.') {
            windowCounts[1]++;
        } else if (input[i * 5 + 4].charAt(j * 5 + 1) === '.') {
            windowCounts[2]++;
        } else if (input[i * 5 + 5].charAt(j * 5 + 1) === '.') {
            windowCounts[3]++;
        } else {
            windowCounts[4]++;
        }
    }
}
console.log(windowCounts.join(' '));