let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let line = input[1].split(' ');
let sum = 0;
for (let i = 0; i < parseInt(input[0]); i++) {
    switch (line[i]) {
        case '0':
            sum += 2;
            break;
        case '1':
            sum += 1;
            break;
        case '2':
            sum += 0.5;
            break;
        case '4':
            sum += 0.25;
            break;
        case '8':
            sum += 0.125;
            break;
        case '16':
            sum += 0.0625;
            break;
    }
}
console.log(sum);