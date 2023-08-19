let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = input[0].split('')
let sum = 0
for (let i = 0; i < a.length; i++) {
  if (a[i] === '0') {
    sum += 9
  }else {
    sum += parseInt(a[i])
  }
}
console.log(sum)
