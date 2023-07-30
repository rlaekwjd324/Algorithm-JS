let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let number = Number(input[i])
  let sumN = 0
  let sumNOdd = 0
  let sumNEven = 0
  for (let j = 1; j <= number; j++) {
    sumN += j
    sumNOdd += (2 * j - 1)
    sumNEven += (2 * j)
  }
  answer += (sumN + ' ' + sumNOdd + ' ' + sumNEven + '\n')
}
console.log(answer)
