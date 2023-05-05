let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let answer = ''
for (let i = 0; i < input.length; i++) {
  let x = Number(input[i].split(' ')[0])
  let y = Number(input[i].split(' ')[1])
  if (x === 0 || y === 0) {
    answer += 'AXIS\n'
  }else if (x > 0 && y > 0) {
    answer += 'Q1\n'
  }else if (x < 0 && y > 0) {
    answer += 'Q2\n'
  }else if (x < 0 && y < 0) {
    answer += 'Q3\n'
  }else if (x > 0 && y < 0) {
    answer += 'Q4\n'
  }
}
console.log(answer)
