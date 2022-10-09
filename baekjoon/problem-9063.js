let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let maxX = -10001;
let minX = 10001;
let maxY = -10001;
let minY = 10001;
for (let i = 1; i <= parseInt(input[0]); i++) {
    let line = input[i].split(' ');
    maxX = Math.max(maxX, parseInt(line[0]));
    maxY = Math.max(maxY, parseInt(line[1]));
    minX = Math.min(minX, parseInt(line[0]));
    minY = Math.min(minY, parseInt(line[1]));
}
let a = (maxX - minX) * (maxY - minY);
console.log(a);