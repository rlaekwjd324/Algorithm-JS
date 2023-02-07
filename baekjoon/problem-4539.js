let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let number = input[i]
  let newNumber = number
  for (let j = 1; j < number.length;j++) {
    newNumber = (Math.round(parseInt(newNumber) / Math.pow(10, j)) * Math.pow(10, j)).toString()
  }
  answer += (newNumber + '\n')
}
console.log(answer)
