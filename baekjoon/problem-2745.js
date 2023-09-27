let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split(' ')[0]
let b = Number(input[0].split(' ')[1])
let number = BigInt(0)
for (let i = 0; i < n.length; i++) {
  let temp = n.split('')[i]
  let tempNumber = parseInt(temp)
  if (temp.charCodeAt(0) >= 65) {
    tempNumber = temp.charCodeAt(0) - 55
  }
  number += BigInt(tempNumber * Math.pow(b, n.length - i - 1))
}
console.log(number.toString())
