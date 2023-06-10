let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let m = parseInt(input[0].split(' ')[1])
let count = n
while(n / m >= 1) {
  count += parseInt(n / m)
  n = parseInt(n / m)
}
console.log(count)
