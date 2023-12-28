let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let s = Number(input[0].split(' ')[0])
let d = Number(input[0].split(' ')[1])
let i = Number(input[0].split(' ')[2])
let l = Number(input[0].split(' ')[3])
let n = Number(input[0].split(' ')[4])
let temp = s + d + i + l
let count = 0
while (temp / 4 < n) {
  temp++
  count++
}
console.log(count)
