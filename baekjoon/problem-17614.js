let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let count = 0
for (let i = 1; i <= n; i++) {
  let num = i.toString().split('')
  for (let j = 0; j < num.length; j++) {
    if (num[j] !== '0' && parseInt(num[j]) % 3 === 0) {
      count++
    }
  }
}
console.log(count)
