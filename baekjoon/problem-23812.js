let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');

let number = parseInt(input[0]);

for (let i = 0; i < number * 5; i++) {
    var line = '';
    if ((i >= number && i < number * 2) || (i >= number * 3 && i < number * 4)) {
        line += '@'.repeat(number * 5);
    } else {
        for (var j = 0; j < number * 5; j++) {
            if (j < number || j >= number * 4) {
                line += '@';
            } else {
                line += ' ';
            }
        }
    }
    console.log(line);
}