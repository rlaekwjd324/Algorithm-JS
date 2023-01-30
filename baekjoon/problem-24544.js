let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let firstNumbers = input[1].split(' ').map(function (v) { return parseInt(v)})
let secondNumbers = input[2].split(' ').map(function (v) { return parseInt(v)})
let sum = 0
let notMyViewSum = 0
for (let j = 0; j < n; j++) {
  sum += firstNumbers[j]
  if (secondNumbers[j] === 0) {
    notMyViewSum += firstNumbers[j]
  }
}
console.log(sum)
console.log(notMyViewSum)
