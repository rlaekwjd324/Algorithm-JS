let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let word = input[1].split('')
let bCount = 0
let sCount = 0
let aCount = 0
for (let i = 0; i < n; i++) {
  if (word[i] === 'B') {
    bCount++
  }else if (word[i] === 'S') {
    sCount++
  }else {
    aCount++
  }
}
let answer = ''
if (bCount < sCount) {
  if (sCount < aCount) {
    answer = 'A'
  }else if (sCount === aCount) {
    answer = 'SA'
  }else {
    answer = 'S'
  }
}else if (bCount === sCount) {
  if (sCount === aCount) {
    answer = 'SCU'
  }else if (sCount < aCount) {
    answer = 'A'
  }else {
    answer = 'BS'
  }
}else {
  if (bCount === aCount) {
    answer = 'BA'
  }else if (bCount > aCount) {
    answer = 'B'
  }else {
    answer = 'A'
  }
}
console.log(answer)
