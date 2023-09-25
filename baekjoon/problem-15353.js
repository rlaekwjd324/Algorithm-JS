let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let numbers = input[0].split(' ')
numbers.sort(function (a, b) { return a.length - b.length })
let smallNumber = numbers[0].split('').map(function (n) { return parseInt(n)})
let bigNumber = numbers[1].split('').map(function (n) { return parseInt(n)})
let upperNumber = 0
let number = ''
for (let i = 0; i < smallNumber.length; i++) {
  let a = bigNumber[bigNumber.length - i - 1]
  let b = smallNumber[smallNumber.length - i - 1]
  let newNumber = a + b + upperNumber
  upperNumber = parseInt(newNumber / 10)
  number = (newNumber % 10) + number
}
for (let i = smallNumber.length; i < bigNumber.length; i++) {
  let a = bigNumber[bigNumber.length - i - 1]
  let newNumber = a + upperNumber
  upperNumber = parseInt(newNumber / 10)
  number = (newNumber % 10) + number
}
if (upperNumber > 0) {
  number = upperNumber + number
}
console.log(number)
