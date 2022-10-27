let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let answer = '';
let index = 0;
while (input[index] !== '0') {
    // 2->3
    // 3->7
    // 4->13
    answer += (input[index] + ' => ' + (parseInt(input[index]) * parseInt(input[index]) - parseInt(input[index]) + 1) + '\n');
    index++;
}
console.log(answer);