let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let n = Number(input[0].split(' ')[2])
let array = []
for (let i = 0; i < n; i++) {
  let temp = a * n + b * (i + 1)
  if (!array.includes(temp)) {
    array.push(temp)
  }
}
array.sort(function (a, b) { return a - b })
console.log(array.join(' '))
