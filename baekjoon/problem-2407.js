let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = BigInt(input[0].split(' ')[0])
let m = BigInt(input[0].split(' ')[1])
let momNumber = BigInt(1)
let sonNumber = BigInt(1)
for (let i = 0; i < m; i++) {
  momNumber = momNumber * (n - BigInt(i))
  sonNumber = sonNumber * (m - BigInt(i))
}
console.log((momNumber / sonNumber).toString())
