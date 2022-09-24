let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
var counts = new Array(parseInt(input[0].split(' ')[0]));
for (var i = 0; i < counts.length; i++) {
    counts[i] = 0;
}
for (let i = 1; i <= parseInt(input[0].split(' ')[1]); i++) {
    let line = input[i].split(' ');
    counts[parseInt(line[0]) - 1]++;
    counts[parseInt(line[1]) - 1]++;
}
console.log(counts.join('\n'));
