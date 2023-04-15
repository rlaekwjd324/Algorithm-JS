let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
if (input[1].charAt(n - 1) === 'G') {
  console.log(input[1].substring(0, n - 1))
}else {
  console.log(input[1] + 'G')
}
