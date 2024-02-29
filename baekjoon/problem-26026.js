let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0])
let array = input[1].split('')
let count = 0
let coffee = 0
for (let i = 0; i < a; i++) {
  if (array[i] === '1') {
    count = 2
    coffee++
  } else if (count > 0) {
    count -= 1
    coffee++
  }
}
console.log(coffee)
