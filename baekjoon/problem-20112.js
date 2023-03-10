let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let array = new Array(n)
for (let i = 1; i <= n; i++) {
  array[i - 1] = input[i].split('')
}
for (let i = 0;i < n; i++) {
  let isNo = false
  for (let j = 0; j < n; j++) {
    if (array[i][j] !== array[j][i]) {
      isNo = true
      break
    }
  }
  if (isNo) {
    console.log('NO')
    return
  }
}
console.log('YES')