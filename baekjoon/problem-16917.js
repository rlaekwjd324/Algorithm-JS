let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let c = Number(input[0].split(' ')[2])
let x = Number(input[0].split(' ')[3])
let y = Number(input[0].split(' ')[4])
let sum = 0
if ((a + b) / 2 > c) {
  if (x > y) {
    let halfCount = y
    sum += (halfCount * 2 * c)
    sum += (x - halfCount) * a
  }else {
    let halfCount = x
    sum += (halfCount * 2 * c)
    sum += (y - halfCount) * b
  }
}else {
  sum = a * x + b * y
}
let tempSum = c * 2 * (x > y ? x : y)
console.log(sum < tempSum ? sum : tempSum)
