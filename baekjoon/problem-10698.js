let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');

for (let i = 1; i <= parseInt(input[0]); i++) {
    let line = input[i].trim().split(' ');
    let value = 0;
    switch (line[1]) {
        case '+':
            value = parseInt(line[0]) + parseInt(line[2]);
            break;
        case '-':
            value = parseInt(line[0]) - parseInt(line[2]);
            break;
    }
    console.log('Case ' + i + ': ' + (value === parseInt(line[4]) ? 'YES' : 'NO'));
}