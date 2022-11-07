let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let testCase = parseInt(input[0]);
let answer = '';
for (let i = 1; i <= testCase; i++) {
    let line = input[i].split(' ');
    let number = parseInt(line[0]);
    let isOdd = parseInt(line[1]);
    let divNumbers = 0;
    while (number > 0) {
        // 이진수 구하는 방식 0으로 해야함
        // number > 1로 하고 맨 밑에 divNumbers++; 해줬더니 오류남
        divNumbers += (number % 2);
        number = parseInt(number / 2);
    }
    (divNumbers % 2 === isOdd) ? (answer += 'Valid\n') : (answer += 'Corrupt\n');
}
console.log(answer);