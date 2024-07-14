let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let a = Number(input[0]) 
let b = Number(input[1])
let arr = input[2].split(' ')
let sum = 0
for (let i=0; i<b; i++) {
  sum += Number(arr[i])
}
if (a <= sum) {
  return console.log('Padaeng_i Happy')
}
console.log('Padaeng_i Cry')
