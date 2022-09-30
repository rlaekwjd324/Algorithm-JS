let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let index = 0;
while (input[index] !== '-1') {
    let n = parseInt(input[index]);
    let preTime = 0;
    let totalMiles = 0;
    for (let i = 0; i < n; i++) {
        index++;
        let line = input[index].split(' ');
        let speed = parseInt(line[0]);
        let time = parseInt(line[1]);
        totalMiles += (time - preTime) * speed;
        preTime = time;
    }
    console.log(totalMiles + ' miles');
    index++;
}