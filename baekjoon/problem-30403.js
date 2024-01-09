let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let word = input[1].split('')
let array = 'ROYGBIVroygbiv'.split('')
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let i = 0; i < n; i++) {
  if (array.indexOf(word[i]) !== -1) {
    count[array.indexOf(word[i])]++
  }
}
let isSmall = true
let isBig = true
for (let i = 0; i < 7; i++) {
  if (count[i] < 1) {
    isBig = false
    break
  }
}
for (let i = 0; i < 7; i++) {
  if (count[i + 7] < 1) {
    isSmall = false
    break
  }
}
if(isSmall && isBig) {
  return console.log('YeS')
}
if(isSmall) {
  return console.log('yes')
}
if(isBig) {
  return console.log('YES')
}
return console.log('NO!')
