let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let n = parseInt(input[0]);
while (true) {
    let sum = 0;
    for (let i = 0; i < n.toString().length; i++) {
        sum += parseInt(n.toString().split('')[i]);
    }
    if (n % sum === 0) {
        console.log(n);
        return;
    }
    n++;
}