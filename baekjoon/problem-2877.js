let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let k = Number(input[0])
let count = 0
putNumber('4')
putNumber('7')
function putNumber (tempNumber) {
  if(count === k) {
    return
  }
  count++
  putNumber(tempNumber + '4')
  putNumber(tempNumber + '7')
}
