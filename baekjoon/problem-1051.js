let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let array = new Array(n)
for (let i = 1; i <= n; i++) {
  array[i - 1] = input[i].split('').map(function (v) {return parseInt(v)})
}
let max = 1
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < m - 1; j++) {
    for (let k = n - 1; k > i; k--) {
      if (array[i][j] === array[k][j]) {
        if (j + k - i < m && array[i][j] === array[i][j + k - i] && array[i][j] === array[k][j + k - i]) {
          max = Math.max(max, (k - i + 1) * (k - i + 1))
        }
      }
    }
  }
}
console.log(max)
