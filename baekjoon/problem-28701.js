let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let sums = [0, 0, 0]
for (let i = 1; i <= n; i++) {
  sums[0] += i
  sums[2] += Math.pow(i, 3)
}
sums[1] = sums[0] * sums[0]
console.log(sums.join('\n'))
