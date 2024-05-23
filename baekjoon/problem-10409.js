let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let t = Number(input[0].split(' ')[1])
let array = input[1].split(' ')
let sum = 0
for (let i = 0; i < n; i++) {
  sum += Number(array[i])
  if(sum > t) {
    return console.log(i)
  }
}
console.log(n)