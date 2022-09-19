let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');

for (var i = 1; i <= parseInt(input[0]); i++) {
    let line = input[i].trim().split(' ');
    let count = line[0];
    line.splice(0, 1);
    line.sort(function (a, b) {
        return a - b;
    });
    var largestGap = 0;
    for (var j = 1; j < line.length; j++) {
        largestGap = Math.max(largestGap, line[j] - line[j - 1]);
    }
    console.log('Class ' + i);
    console.log('Max ' + line[count - 1] + ', Min ' + line[0] + ', Largest gap ' + largestGap);
}
