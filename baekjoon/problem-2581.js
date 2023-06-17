let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let m = parseInt(input[0])
let n = parseInt(input[1])
if(m === 1) {
  m++
}
let min = n
let sum = 0
for (let i = m; i <= n; i++) {
  if (isRightNumber(i)) {
    sum += i
    min = Math.min(min, i)
  }
}
if(sum === 0) {
  return console.log(-1)
}
console.log(sum)
console.log(min)

function isRightNumber (number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}
