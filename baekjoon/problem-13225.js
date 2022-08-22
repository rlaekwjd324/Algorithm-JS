let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input[0];

for (let i = 1; i <= count; i++) {
    let num = Number(input[i]);
    var divisorsCount = 0;
    for (let j = 1; j <= num; j++) {
        if (num % j === 0) {
            divisorsCount++;
        }
    }
    console.log(num + ' ' + divisorsCount);
}