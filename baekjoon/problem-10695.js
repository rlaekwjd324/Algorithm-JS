let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let answer = ''
for (let i = 1; i <= parseInt(input[0]); i++) {
  let line = input[i].split(' ').map(function (v) { return parseInt(v); })
  let possible = 'NO'
  if( (Math.abs(line[1] - line[3]) === 1 && Math.abs(line[2] - line[4]) === 2)) {
    possible = 'YES'
  }
  if( (Math.abs(line[1] - line[3]) === 2 && Math.abs(line[2] - line[4]) === 1)) {
    possible = 'YES'
  }
  answer += ('Case ' + i + ': ' + possible + '\n')
}
console.log(answer)
