let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let n = parseInt(input[0].split(' ')[0]);
let m = parseInt(input[0].split(' ')[1]);
let array = new Array(n);
for (let i = 0; i < array.length; i++) {
    array[i] = new Array();
}
let count = 0;
for (let i = 1; i <= n; i++) {
    let line = input[i].split('');
    let reverseLine = input[i + n + 1].split('');
    for (let j = 0; j < m; j++) {
        if (line[j] === reverseLine[j]) {
            count++;
        }
    }
}
console.log(count);