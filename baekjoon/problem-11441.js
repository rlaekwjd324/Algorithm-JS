let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let numbers = input[1].split(' ').map(function (v) {return parseInt(v)})
let sumArray = new Array(n)
let m = parseInt(input[2])
sumArray[0] = numbers[0]
for (let i = 1; i < n; i++) {
  sumArray[i] = sumArray[i - 1] + numbers[i]
}
let answer = ''
for (let i = 3; i < m + 3; i++) {
  let startIndex = parseInt(input[i].split(' ')[0]) - 1
  let endIndex = parseInt(input[i].split(' ')[1]) - 1
  answer += ((sumArray[endIndex] - (startIndex === 0 ? 0 : sumArray[startIndex - 1])) + '\n')
}
console.log(answer)
