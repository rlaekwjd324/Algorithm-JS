let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = input[0].split(' ')[0].split('')
let b = input[0].split(' ')[1].split('')
let minA = ''
let maxA = ''
let minB = ''
let maxB = ''
for (let i = 0; i < a.length; i++) {
  if (a[i] === '5') {
    maxA += '6'
    minA += '5'
  }else if (a[i] === '6') {
    maxA += '6'
    minA += '5'
  }else {
    maxA += a[i]
    minA += a[i]
  }
}
for (let i = 0; i < b.length; i++) {
  if (b[i] === '5') {
    maxB += '6'
    minB += '5'
  }else if (b[i] === '6') {
    maxB += '6'
    minB += '5'
  }else {
    maxB += b[i]
    minB += b[i]
  }
}
let sumMax = parseInt(maxA) + parseInt(maxB)
let sumMin = parseInt(minA) + parseInt(minB)
console.log(sumMin + ' ' + sumMax)
