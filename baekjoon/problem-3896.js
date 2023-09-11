let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let num = Number(input[i])
  let tempNum = num
  if (isRight(num)) {
    answer += '0\n'
    continue
  }
  while (true) {
    num++
    if (isRight(num)) {
      break
    }
  }
  while (true) {
    tempNum--
    if (isRight(tempNum)) {
      break
    }
  }
  answer += ((num - tempNum) + '\n')
}
console.log(answer)
function isRight (number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}
