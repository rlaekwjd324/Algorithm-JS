let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let left = input[0].split('(^0^)')[0].split('')
let right = input[0].split('(^0^)')[1].split('')
let leftCount = 0
let rightCount = 0
for (let i = 0; i < left.length; i++) {
  if (left[i] === '@') {
    leftCount++
  }
}
for (let i = 0; i < right.length; i++) {
  if (right[i] === '@') {
    rightCount++
  }
}
console.log(leftCount + ' ' + rightCount)
