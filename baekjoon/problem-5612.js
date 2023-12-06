let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let m = Number(input[1])
let max = m
for (let i = 0; i < n; i++) {
  let inputCar = Number(input[i + 2].split(' ')[0])
  let outputCar = Number(input[i + 2].split(' ')[1])
  m += inputCar
  m -= outputCar
  max = Math.max(max, m)
  if(m < 0) {
    return console.log(0)
  }
}
console.log(max)
