let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let x = parseInt(input[0].split(' ')[0])
let n = parseInt(input[0].split(' ')[1])
for (let i = 0; i <= n; i++) {
  if (x % 2 === 0) {
    x = x / 2 + 6
  }else {
    x = x * 2 + 6
  }
}
console.log(x)
