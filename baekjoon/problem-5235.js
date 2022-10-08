let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let answer = '';
for (let i = 1; i <= parseInt(input[0]); i++) {
  let line = input[i].toString().trim().split(' ');
  let evenSum = 0;
  let oddSum = 0;
  for (let j = 1; j <= parseInt(line[0]); j++) {
    if (parseInt(line[j]) % 2 === 0) {
      evenSum += parseInt(line[j]);
    } else {
      oddSum += parseInt(line[j]);
    }
  }
  answer += (evenSum > oddSum ? 'EVEN\n' : (evenSum === oddSum ? 'TIE\n' : 'ODD\n'));
}
console.log(answer);