let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let c = Number(input[1].split(' ')[0])
let d = Number(input[1].split(' ')[1])
let array = [0, 0, 0, 0]
array[0] = a / c + b / d
array[1] = c / d + a / b
array[2] = d / b + c / a
array[3] = b / a + d / c
let max = array[0]
let index = 0
for (let i = 1; i < array.length; i++) {
  if (max < array[i]) {
    max = array[i]
    index = i
  }
}
console.log(index)
