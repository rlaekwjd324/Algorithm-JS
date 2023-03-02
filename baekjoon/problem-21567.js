let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = BigInt(input[0])
let b = BigInt(input[1])
let c = BigInt(input[2])
let newNumber = a * b * c
let countArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let i = 0; i < newNumber.toString().length; i++) {
  countArray[BigInt(newNumber.toString().split('')[i])]++
}
console.log(countArray.join('\n'))
