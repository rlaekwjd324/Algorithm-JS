let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let answer = ''
for (let i = 1; i <= parseInt(input[0]);i++) {
  let numbers = input[i].split(' ').map(function (n) { return parseInt(n); })
  if (numbers[0] + numbers[1] === numbers[2]) {
    answer += 'Possible\n'
    continue
  }
  if (numbers[0] - numbers[1] === numbers[2]) {
    answer += 'Possible\n'
    continue
  }
  if (numbers[0] * numbers[1] === numbers[2]) {
    answer += 'Possible\n'
    continue
  }
  if (numbers[0] / numbers[1] === numbers[2]) {
    answer += 'Possible\n'
    continue
  }
  if (numbers[1] + numbers[0] === numbers[2]) {
    answer += 'Possible\n'
    continue
  }
  if (numbers[1] - numbers[0] === numbers[2]) {
    answer += 'Possible\n'
    continue
  }
  if (numbers[1] * numbers[0] === numbers[2]) {
    answer += 'Possible\n'
    continue
  }
  if (numbers[1] / numbers[0] === numbers[2]) {
    answer += 'Possible\n'
    continue
  }
  answer += 'Impossible\n'
}
console.log(answer)
