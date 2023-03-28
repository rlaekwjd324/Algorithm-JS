let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let array = new Array(n)
let sumArray = new Array(n)
for (let i = 0; i < n; i++) {
  array[i] = input[i + 1].split(' ').map(function (v) {return parseInt(v)})
  sumArray[i] = new Array(i + 1)
}
sumArray[0][0] = array[0][0]
for (let i = 1;i < n;i++) {
  for (let j = 0;j < n;j++) {
    sumArray[i][j] = array[i][j]
    if (j === 0) {
      sumArray[i][j] += sumArray[i - 1][0]
    }else if (j === i) {
      sumArray[i][j] += sumArray[i - 1][j - 1]
    }else {
      sumArray[i][j] += Math.max(sumArray[i - 1][j - 1], sumArray[i - 1][j])
    }
  }
}
let max = 0
for (let i = 0; i < n; i++) {
  max = Math.max(max, sumArray[n - 1][i])
}
console.log(max)
