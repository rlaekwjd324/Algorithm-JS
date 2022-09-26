let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
var index = 0;
var output = '';
while (input[index] !== '-1') {
    var t = 0;
    var sum = 0;
    var s = parseInt(input[index]);
    for (var i = 0; i < s; i++) {
        index++;
        let line = input[index].split(' ');
        sum += (parseInt(line[0]) * (parseInt(line[1]) - t));
        t = parseInt(line[1]);
    }
    index++;
    output += (sum + ' miles\n');
}
console.log(output);