let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let count = 0
addNumber('1')
addNumber('2')
function addNumber (number) {
  if (number.length === n) {
    let sum = 0
    for (let i = 0; i < n; i++) {
      sum += Number(number.split('')[i])
    }
    if (sum % 3 === 0) {
      count++
    }
    return
  }
  for (let i = 0; i < 3; i++) {
    addNumber(number + i.toString())
  }
}
console.log(count)
