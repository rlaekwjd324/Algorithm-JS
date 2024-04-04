let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let x = Number(input[1].split(' ')[0])
let y = Number(input[1].split(' ')[1])
let r = Number(input[1].split(' ')[2])
let a = 0
let b = 0
for (let i = 2; i <= n + 1; i++) {
  let num = Number(input[i])
  if (num < x + r && num > x - r) {
    a++
  }else if (num === x + r || num === x - r) {
    b++
  }
}
console.log(a + ' ' + b)
