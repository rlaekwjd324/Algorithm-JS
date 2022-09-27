let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('test.txt').toString().trim().split(' ');
var yt = parseInt(input[0]);
var yj = parseInt(input[1]);
var index = 0;
while (yt < 5 && yj < 5) {
    if (index % 2 === 0) {
        yj += yt;
    } else {
        yt += yj;
    }
    index++;
}
console.log(yt >= 5 ? 'yj' : 'yt');