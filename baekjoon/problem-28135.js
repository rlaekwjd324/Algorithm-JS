let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let count = 0
for (let i = 1; i <= n; i++) {
  count++
  if (i === n) {
    break
  }
  if (i.toString().includes('50')) {
    count++
  }
}
console.log(count)
