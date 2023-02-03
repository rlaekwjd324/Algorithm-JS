let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let r = parseInt(input[0].split(' ')[0])
let c = parseInt(input[0].split(' ')[1])
let q = parseInt(input[0].split(' ')[2])
let array = new Array(r)
let sumArray = new Array(r)
for (let i = 0; i < r;i++) {
  array[i] = input[i + 1].split(' ').map(function (v) { return parseInt(v)})
  sumArray[i] = new Array(c)
  for (let j = 0; j < c;j++) {
    let sum1 = array[i][j]
    let sum2 = i >= 1 ? sumArray[i - 1][j] : 0
    let sum3 = j >= 1 ? sumArray[i][j - 1] : 0
    let sum4 = i >= 1 && j >= 1 ? sumArray[i - 1][j - 1] : 0
    sumArray[i][j] = sum1 + sum2 + sum3 - sum4
  }
}
let answer = ''
for (let i = r + 1; i <= r + q; i++) {
  let r1 = parseInt(input[i].split(' ')[0]) - 1
  let c1 = parseInt(input[i].split(' ')[1]) - 1
  let r2 = parseInt(input[i].split(' ')[2]) - 1
  let c2 = parseInt(input[i].split(' ')[3]) - 1
  let sum = 0
  let sum1 = sumArray[r2][c2]
  let sum2 = r1 >= 1 ? sumArray[r1 - 1][c2] : 0
  let sum3 = c1 >= 1 ? sumArray[r2][c1 - 1] : 0
  let sum4 = r1 >= 1 && c1 >= 1 ? sumArray[r1 - 1][c1 - 1] : 0
  sum = sum1 - sum2 - sum3 + sum4
  answer += (parseInt(sum / ((r2 - r1 + 1) * (c2 - c1 + 1))) + '\n')
}
console.log(answer)
